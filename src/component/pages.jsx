import CircumIcon from "@klarr-agency/circum-icons-react"; // React
import { Link } from "react-router-dom";

function Pages() {
  return (
    <div className="flex justify-end gap-[40rem] bg-[#f9fcfb] py-5 px-36 items-center">
      {/*<select
        name=""
        id=""
        className="bg-[#0b7c6b]  text-white p-5 px-16  rounded-full text-3xl"
      >
        <option value="Category">Categories</option>
      </select>*/}

      <ul className="flex gap-16 items-center text-3xl  ">
        <Link className="" to={"/"}>
          <li className="hover:text-[#0b7c6b] cursor-pointer">Home</li>
        </Link>

        <Link to={"/products"}>
          <li className="hover:text-[#0b7c6b] cursor-pointer">Products</li>
        </Link>
        <select className="hover:text-[#0b7c6b] bg-transparent cursor-pointer">
          <option
            className="hover:text-[#0b7c6b] cursor-pointer "
            value="New blog"
          >
            New Blog
          </option>
          <option className="hover:text-[#0b7c6b] cursor-pointer " value="Blog">
            Blog
          </option>
          <option
            className="hover:text-[#0b7c6b] cursor-pointer "
            value="old blog"
          >
            Old Blog
          </option>
        </select>
        <li className="hover:text-[#0b7c6b] cursor-pointer">Contact</li>
        <li className="hover:text-[#0b7c6b] cursor-pointer">About Us</li>
      </ul>

      <div className="flex gap-5 items-center text-2xl">
        <CircumIcon name="mobile_1" color="#0b7c60" size="28px"></CircumIcon>
        <div className="flex flex-col gap-3">
          <h3 className="text-[#0b7c6b] font-bold text-3xl ">
            +1 840 - 8412569
          </h3>
          <h3 className="text-2xl">24/7 support Center</h3>
        </div>
      </div>
    </div>
  );
}

export default Pages;
