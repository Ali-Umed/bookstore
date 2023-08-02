import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between items-center bg-[#fdf2e9] py-0 px-[4.8rem] h-[9.6rem]">
      <img src="logo1.png " className=" h-[8rem] w-32" alt="" />
      <nav>
        <ul className="flex items-center gap-[3.2rem]">
          <Link to={"/"}>
            <a className="main-nav-link" href="">
              Home
            </a>
          </Link>
          <li>
            <a className="main-nav-link" href="">
              Pages
            </a>
          </li>

          <Link to={"/products"}>
            <a className="main-nav-link" href="">
              {" "}
              products
            </a>
          </Link>
          <li>
            <a className="main-nav-link nav-cta text-[#fff]  " href="#">
              Try for free
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
