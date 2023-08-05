/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../page/Search";

const BASE_URL = "https://api.itbook.store/1.0/search/";
function Navbar({ search, setSearch, isLoading, setIsLoading, setErr }) {
  let [query, setQuery] = useState("app");
  let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const url = window.location.href;
  console.log(url);
  useEffect(
    function() {
      const controller = new AbortController();

      async function fetchData() {
        setIsLoading(true);

        try {
          let res = await fetch(`${BASE_URL}${query}`, {
            signal: controller.signal,
          });

          let data = await res.json();
          if (!data.books.length) {
            throw new Error("some thing wrong while searching data");
          }
          setSearch(data.books);
          setErr("");

          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
          setErr(error);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        return;
      }
      fetchData();
      return function() {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <header className="flex justify-between items-center bg-[#fdf2e9] py-2 px-4 lg:px-8 xl:px-16 h-auto lg:h-[9.6rem]">
      <div className="flex-col  lg:flex-row items-center">
        <img src="logo1.png" className="h-[8rem] w-32 lg:w-auto" alt="" />

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row items-center mt-4 lg:mt-0`}
        >
          <div className="flex justify-center  items-center">
            <input
              value={query}
              onChange={e => {
                setQuery(e.target.value);
              }}
              type="text"
              placeholder="Search"
              className="px-4 py-2 lg:px-6 lg:py-5 bg-transparent border border-white rounded-lg placeholder-black text-base lg:text-lg"
            />
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
      </div>

      {/* Mobile menu */}

      <button
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
      </button>
    </header>
  );
}
export default Navbar;
