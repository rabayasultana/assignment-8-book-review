import BookCard from "../BookCard/BookCard";

const Books = ( {books} ) => {
  return (
    <div>
      <h2 className="text-[40px] font-bold text-center mt-20 mb-10">Books</h2>

      <div className="grid  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-20 border">
        {books.map((book) => (
          <BookCard book={book} key={book.bookId}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
