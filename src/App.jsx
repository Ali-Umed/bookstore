/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable react/prop-types */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Products from "./page/Products";
import { useEffect, useState } from "react";
import Search from "./page/Search";
import Location from "./page/Location";
import PageNotFound from "./page/PageNotFound";

const sectionImg = [
  {
    id: 1,
    img: "bookk.png",
  },
   {
    id: 999,
    img: "bookk.png",
  },
  {
    id: 2,
    img: "bookk.png",
  },
  {
    id: 3,
    img: "bookk.png",
  },
  {
    id: 4,
    img: "bookk.png",
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
    img: "bookk.png",
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
    img: "bookk.png",
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

let TrendingNow = [
  { id: 0, catagory: "Trending Now" },
  {
    id: 1,
    image: "/book2.jpg",
    title: "shelton",
    writter: "ali umed",
    price: "55$",
  },
  {
    id: 2,
    title: "shelton",
    image: "/bgdiscount2.jpg",
    writter: "ali umed",
    price: "55$",
  },
  {
    id: 3,
    title: "shelton",
    image: "/book2.jpg",
    writter: "ali umed",
    price: "55$",
  },
  {
    id: 4,
    title: "shelton",
    image: "/bgdiscount2.jpg",
    writter: "ali umed",
    price: "55$",
  },
  {
    offer: "buy one get one 30% of",
    timeOfvaild: "this offer is vaild at book store of 1 october 20023",
    id: 6,
    image: "/bgdiscount2.jpg",
    typeOfDiscount: "novel every day",
    priceDiscount: " 45% of",
    number: "073023434234",
  },
];

let catagoryBestSellingBook = [
  { id: 0, catagory: "Best Selling Book" },
  {
    id: 1,
    image: "/book2.jpg",
    title: "shelton",
    writter: "ali umed",
    price: "55$",
  },
  {
    id: 2,
    title: "shelton",
    image: "/bgdiscount2.jpg",
    writter: "ali umed",
    price: "55$",
  },
  {
    id: 3,
    title: "shelton",
    image: "/book2.jpg",
    writter: "ali umed",
    price: "55$",
  },
  {
    id: 4,
    title: "shelton",
    image: "/bgdiscount2.jpg",
    writter: "ali umed",
    price: "55$",
  },
  {
    offer: "buy one get one 30% OFF",
    timeOfvaild: "this offer is vaild at book store of 1 october 20023",
    id: 6,
    image: "/bgdiscount2.jpg",
    typeOfDiscount: "novel every day",
    currentDiscount: " 45% OFF",
    number: "073023434234",
  },
];

let popularBook = [
  { id: 0, catagory: "Popular Book" },
  {
    id: 1,
    image: "/book2.jpg",
    title: "shelton",
    writter: "ali umed",
    current: "55$",
  },
  {
    id: 2,
    title: "shelton",
    image: "/bgdiscount2.jpg",
    writter: "ali umed",
    current: "55$",
  },
  {
    id: 3,
    title: "shelton",
    image: "/book2.jpg",
    writter: "ali umed",
    current: "55$",
  },
  {
    id: 4,
    title: "shelton",
    image: "/bgdiscount2.jpg",
    writter: "ali umed",
    current: "55$",
  },
  {
    offer: "buy one get one 30% of",
    timeOfvaild: "this offer is vaild at book store of 1 october 20023",
    id: 6,
    image: "/bgdiscount2.jpg",
    typeOfDiscount: "novel every day",
    currentDiscount: " 45% OFF",
    number: "073023434234",
  },
];

const BASE_URL = "https://api.itbook.store/1.0";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  //let [err, setErr] = useState("");

  popularBook = data.filter((item, index) => index < 10);
  catagoryBestSellingBook = data.filter((item, index) => index > 10);
  TrendingNow = data.filter((item, index) => index < 10);

  useEffect(function() {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        let res = await fetch(`${BASE_URL}/new`);

        if (!res)
          throw new Error("something went wrong with fetching data ", {
            signal: controller.signal,
          });

        let data = await res.json();
        setData(data.books);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();

    return function() {
      controller.abort();
    };
  }, []);

  function HandleAddToCart(item) {
    useState(items => [...items, item]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            //isLoading ? (
            //  <h1 className="text-2xl text-center">Loading...</h1>
            //) :
            <HomePage
              sectionImg={sectionImg}
              discountImages={discountImages}
              popularBook={popularBook}
              catagoryBestSellingBook={catagoryBestSellingBook}
              catagoryBooks={TrendingNow}
              setSearch={setSearch}
              search={search}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              err={err}
              setErr={setErr}
            />
          }
        ></Route>
        <Route
          path="products"
          element={
            <Products
              popularBook={data}
              catagoryBestSellingBook={data}
              catagoryBooks={data}
            />
          }
        ></Route>
        <Route path="shop" element={<HomePage />} />
        <Route
          path="search"
          element={
            <Search
              search={search}
              setSearch={setSearch}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              err={err}
              setErr={setErr}
            />
          }
        />

        <Route path="*" element={<PageNotFound />} />

        <Route
          path="location/bookstore"
          element={
            <Location
              popularBook={data}
              catagoryBestSellingBook={data}
              catagoryBooks={data}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
