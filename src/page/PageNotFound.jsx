import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-7xl text-red-600"> Oops, you found our 404 page</h1>
      <h3 className="text-4xl mt-12">
        This is not a fault, just an accident that was not intentional. However,
        we doubt that this is the page you're looking for and we apologize
        profusely for it.
      </h3>
      <Link to={"/"}>
        <button className="bg-blue-700 text-white text-3xl rounded-full px-12 py-6 mt-12">
          {" "}
          GoTo HomePage
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
