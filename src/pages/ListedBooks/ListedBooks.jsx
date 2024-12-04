import UseLocalStore from "../../Hooks/UseLocalStore";
import ReadBook from "../../components/ReadBook/ReadBook";
import { useEffect, useState } from "react";

const ListedBooks = () => {
    const { localData: readBooks } = UseLocalStore(); 
    const [wishlistBooks, setWishlistBooks] = useState([]); 
    const [activeTab, setActiveTab] = useState("read"); 
    const [sortedBooks, setSortedBooks] = useState([]);
    const [sortOption, setSortOption] = useState(""); 

  
    useEffect(() => {
        const wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlistBooks(wishlistData);
    }, []);

    useEffect(() => {
        const booksToSort = activeTab === "read" ? readBooks : wishlistBooks;


        const sorted = [...booksToSort].sort((a, b) => {
            if (sortOption === "rating") return b.rating - a.rating; 
            if (sortOption === "pages") return b.totalPages - a.totalPages; 
            if (sortOption === "year") return b.yearOfPublishing - a.yearOfPublishing; 
            return 0; 
        });
        setSortedBooks(sorted);
    }, [activeTab, sortOption, readBooks, wishlistBooks]);

    return (
        <div className="mx-20 mt-6">
            <div className="bg-gray-100 rounded-lg text-center">
                <h2 className="py-5 text-black font-bold text-[28px]">Listed Books</h2>
            </div>

            {/* Dropdown */}
            <div className="text-center mt-6">
                <label className="mr-3 text-lg font-bold">Sort By:</label>
                <select
                    className="p-2 border rounded-md"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="">None</option>
                    <option value="rating">Rating</option>
                    <option value="pages">Number of Pages</option>
                    <option value="year">Published Year</option>
                </select>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 mb-4 mt-6 items-center justify-center">
                <button
                    className={`border rounded-lg p-2 ${activeTab === "read" ? "bg-orange-200 text-orange-700" : ""}`}
                    onClick={() => setActiveTab("read")}
                >
                    Read Books
                </button>
                <button
                    className={`border rounded-lg p-2 ${activeTab === "wishlist" ? "bg-orange-200 text-orange-700" : ""}`}
                    onClick={() => setActiveTab("wishlist")}
                >
                    Wishlist
                </button>
            </div>

            {/* Book List */}
            <div>
                {sortedBooks.length > 0 ? (
                    sortedBooks.map((data) => (
                        <ReadBook key={data.bookId} data={data}></ReadBook>
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-6">No books to display.</p>
                )}
            </div>
        </div>
    );
};
export default ListedBooks;