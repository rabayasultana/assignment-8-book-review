import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layouts/Layout';
import Home from './pages/Home/Home';
import ListedBooks from './pages/ListedBooks/ListedBooks';
import BookDetails from './pages/BookDetails/BookDetails';
import WishListBook from './components/WishListBook/WishListBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/fakeData.json')
      },
      {
        path: `/book/:id`,
        element: <BookDetails></BookDetails>,
        loader: async ({ params }) => {
          const response = await fetch(`/fakeData.json`);
          const data = await response.json();
          const book = data.find(item => item.bookId === Number(params.id));
          return book;
        }
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>

      },

        
      {
        path: '/wishlist',
        element: <WishListBook></WishListBook>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
