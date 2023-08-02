/* eslint-disable react/prop-types */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Products from "./page/Products";

const sectionImg = [
  {
    id: 1,
    img: "book2.png",
  },
  {
    id: 2,
    img: "book2.png",
  },
  {
    id: 3,
    img: "book2.png",
  },
  {
    id: 4,
    img: "book2.png",
  },
  {
    id: 5,
    img: "book2.png",
  },
  {
    id: 6,
    img: "book2.png",
  },
  {
    id: 7,
    img: "book2.png",
  },
  {
    id: 8,
    img: "book7.jpg",
  },
  {
    id: 9,
    img: "book1.jpg",
  },
  {
    id: 10,
    img: "book7.jpg",
  },
];

const discountImages = [
  {
    id: 1,
    img: "/bgdiscount1.jpg",
    typeOfDiscount: "summer sale",
    currentDiscount: "Sale 25% off",
  },
  {
    id: 2,
    img: "/bgdiscount2.jpg",
    typeOfDiscount: "novel every day",
    currentDiscount: "Sale 45% off",
  },
];

const catagoryBooks = [
  {
    catagory: "Trending Now",
  },
  {
    id: 1,
    img: "/book2.jpg",
    bookName: "shelton",
    writter: "ali umed",
    current: "55$",
  },
  {
    id: 2,
    bookName: "shelton",
    img: "/bgdiscount2.jpg",
    writter: "ali umed",
    current: "55$",
  },
  {
    id: 3,
    bookName: "shelton",
    img: "/book2.jpg",
    writter: "ali umed",
    current: "55$",
  },
  {
    id: 4,
    bookName: "shelton",
    img: "/bgdiscount2.jpg",
    writter: "ali umed",
    current: "55$",
  },
  {
    offer: "buy one get one 30% of",
    timeOfvaild: "this offer is vaild at book store of 1 october 20023",
    id: 6,
    img: "/bgdiscount2.jpg",
    typeOfDiscount: "novel every day",
    currentDiscount: " 45% of",
    number: "073023434234",
  },
];

const catagoryBestSellingBook = [
  {
    catagory: "Best Selling Book",
  },
  {
    id: 1,
    img: "/book2.jpg",
    bookName: "shelton",
    writter: "ali umed",
    current: "55$",
  },
  {
    id: 2,
    bookName: "shelton",
    img: "/bgdiscount2.jpg",
    writter: "ali umed",
    current: "55$",
  },
  {
    id: 3,
    bookName: "shelton",
    img: "/book2.jpg",
    writter: "ali umed",
    current: "55$",
  },
  {
    id: 4,
    bookName: "shelton",
    img: "/bgdiscount2.jpg",
    writter: "ali umed",
    current: "55$",
  },
  {
    offer: "buy one get one 30% OFF",
    timeOfvaild: "this offer is vaild at book store of 1 october 20023",
    id: 6,
    img: "/bgdiscount2.jpg",
    typeOfDiscount: "novel every day",
    currentDiscount: " 45% OFF",
    number: "073023434234",
  },
];

const popularBook = [
  {
    catagory: "Popular Book",
  },
  {
    id: 1,
    img: "/book2.jpg",
    bookName: "shelton",
    writter: "ali umed",
    current: "55$",
  },
  {
    id: 2,
    bookName: "shelton",
    img: "/bgdiscount2.jpg",
    writter: "ali umed",
    current: "55$",
  },
  {
    id: 3,
    bookName: "shelton",
    img: "/book2.jpg",
    writter: "ali umed",
    current: "55$",
  },
  {
    id: 4,
    bookName: "shelton",
    img: "/bgdiscount2.jpg",
    writter: "ali umed",
    current: "55$",
  },
  {
    offer: "buy one get one 30% of",
    timeOfvaild: "this offer is vaild at book store of 1 october 20023",
    id: 6,
    img: "/bgdiscount2.jpg",
    typeOfDiscount: "novel every day",
    currentDiscount: " 45% OFF",
    number: "073023434234",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <HomePage
              sectionImg={sectionImg}
              discountImages={discountImages}
              popularBook={popularBook}
              catagoryBestSellingBook={catagoryBestSellingBook}
              catagoryBooks={catagoryBooks}
            />
          }
        ></Route>
        <Route
          path="products"
          element={
            <Products
              popularBook={popularBook}
              catagoryBestSellingBook={catagoryBestSellingBook}
              catagoryBooks={catagoryBooks}
            />
          }
        ></Route>
        <Route path="shop" element={<HomePage />} />

        <Route path="*" element={<h1> page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
