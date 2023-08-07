/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CircumIcon from "@klarr-agency/circum-icons-react"; // React
import Pages from "./pages";

const BASE_URL = "https://api.itbook.store/1.0/";
function Navbar({ setSearch, setIsLoading, setErr }) {
  const [query, setQuery] = useState("");
  const [catagory, setCatagory] = useState("AllCategory");

  //useEffect(
  //  function() {
  //    const controller = new AbortController();

  //    async function fetchData() {
  //      setIsLoading(true);
  //      setErr("");

  //      try {
  //        let res = await fetch(`${BASE_URL}${query}`, {
  //          signal: controller.signal,
  //        });

  //        console.log(res);
  //        let data = await res.json();
  //        console.log(data);
  //        if (!data.books.length) {
  //          throw new Error("some thing wrong while searching data");
  //        }
  //        setSearch(data.books);
  //        setErr("");

  //        setIsLoading(false);
  //      } catch (error) {
  //        console.log("handle error in navbar");
  //        console.error(error.message);
  //        setErr(error);
  //      } finally {
  //        setIsLoading(false);
  //      }
  //    }
  //    if (query.length < 3) {
  //      setErr("");
  //      return;
  //    }
  //    fetchData();

  //    return function() {
  //      controller.abort();
  //    };
  //  },
  //  [query]
  //);

  async function fetchData(e) {
    //e.preventDefault();

    setIsLoading(true);
    setErr("");
    let res;

    try {
      if (!query && catagory == "New") {
        res = await fetch(`${BASE_URL}new`);
        console.log("sd");
      } else {
        res = await fetch(`${BASE_URL}search/${query}`);
      }

      let data = await res.json();
      if (!data.books.length) {
        throw new Error("some thing wrong while searching data");
      }
      setSearch(data.books);
      setErr("");

      setIsLoading(false);
    } catch (error) {
      console.log("handle error in navbar");
      console.error(error.message);
      setErr(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-start ">
      <header className="flex justify-between gap-24 items-center bg-[#f9fcfb] py-2 px-36 h-auto lg:h-[9.6rem] border-b-2 border-opacity-25">
        <Link to={"/"}>
          <img src="logo1.png" className="h-[8rem] w-32 lg:w-auto" alt="" />
        </Link>

        <div className="flex gap-24 grow justify-end">
          <div className="flex grow  justify-center  items-center rounded-full ">
            <div className="relative rounded-3xl  w-1/2 ">
              <select
                onChange={e => setCatagory(e.target.value)}
                value={catagory}
                name=""
                id=""
                className="bg-transparent text-black p-5 px-0 top-2 right-0 -translate-x-1/3 rounded-full text-3xl absolute "
              >
                <option value="AllCategory">All Category</option>
                <option value="New">New</option>
              </select>
              <form onSubmit={fetchData}>
                <input
                  value={query}
                  onChange={e => {
                    setQuery(e.target.value);
                  }}
                  type="search"
                  id="search-dropdown"
                  className="block  grow w-full text-left placeholder-black   px-6  py-6 rounded-full z-20 text-2xl text-gray-900 bg-[#e4e9e8]  border-2  border-gray-100 focus:ring-blue-0 focus:border-blue-0 dark:bg-gray-700   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-0 "
                  placeholder="Search products... "
                  //required
                />
                <Link to={`/search`}>
                  <button
                    //disabled={query < 3}
                    onClick={e => fetchData(e)}
                    type="submit"
                    className="absolute rounded-full top-0 right-0 translate-x-1/2 px-14 text-sm font-medium h-full text-white bg-[#0b7c6b]  border border-blue-0 hover:bg-blue-0 focus:ring-4 focus:outline-none focus:ring-blue-0 dark:bg-blue-0 dark:hover:bg-blue-0 dark:focus:ring-blue-0"
                  >
                    <svg
                      className="w-8 h-8 text-white font-bold"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        markerWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    {/*<span className="sr-only">Search</span>*/}
                  </button>
                </Link>
              </form>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <div className="flex gap-5 items-center ">
              <a
                href="https://www.google.com/maps/search/book+store/@36.2348469,44.0384387,13z/data=!3m1!4b1?entry=ttu"
                target="_blank"
              >
                <CircumIcon
                  className=" hover:text-[#0b7c6b] "
                  name="location_on"
                  color="#000"
                  size="24px"
                ></CircumIcon>
              </a>
              <span className="text-2xl font-bold underline">
                find a book store{" "}
              </span>
            </div>
            <CircumIcon name="user" color="#000" size="24px"></CircumIcon>
            <div className="relative ">
              <CircumIcon name="heart" color="#000" size="24px">
                {" "}
              </CircumIcon>
              <span className="absolute  text-center  top-0 right-0 font-extrabold text-white w-5 h-5 bg-black rounded-full ">
                0
              </span>
            </div>
            <div className="relative ">
              <CircumIcon name="shop" color="#000" size="24px">
                {" "}
              </CircumIcon>
              <span className="absolute  text-center  top-0 right-0 font-extrabold text-white w-5 h-5 bg-black rounded-full ">
                0
              </span>
            </div>
          </div>
        </div>

        {/*
          <div className="flex justify-center  items-center">
            <input
              value={query}
              onChange={e => {
                setQuery(e.target.value);
              }}
            
            <Link to={`search`} className="mt-2 lg:mt-0 lg:ml-2">
              <button
                className="flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-[#fdf2e9]"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#e67e22"
                  className="h-5 w-5 lg:h-7 lg:w-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <nav className="mt-4 lg:mt-0">
            <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
              <Link to={"/"} className="main-nav-link">
                Home
              </Link>
              <li>
                <a className="main-nav-link" href="">
                  Pages
                </a>
              </li>
              <Link to={"/products"} className="main-nav-link">
                Products
              </Link>
              <li>
                <a className="main-nav-link nav-cta text-[#fff]" href="#">
                  Try for free
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>*/}

        {/* Mobile menu */}

        {/*<button
        className="lg:hidden ml-4 text-gray-600 focus:outline-none focus:ring"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-16"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 112 0v10a1 1 0 11-2 0V5zm5 0a1 1 0 112 0v10a1 1 0 11-2 0V5zm4 0a1 1 0 112 0v10a1 1 0 11-2 0V5zm5 1a1 1 0 100-2h-4a1 1 0 100 2h4z"
            clipRule="evenodd"
          />
        </svg>
      </button>*/}
      </header>
      <Pages />
    </div>
  );
}
export default Navbar;
