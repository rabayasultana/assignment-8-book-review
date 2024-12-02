import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";

const Home = () => {
    const books = useLoaderData();
    // console.log(books);
  return (
    <div>
      <Banner image={books[0].image}></Banner>
      <Books books={books}></Books>
    </div>
  );
};

export default Home;
