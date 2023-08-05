/* eslint-disable react/prop-types */
import Catagorycomponents from "../component/Catagorycomponents";
import Error from "../component/Error";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function Search({ search, setSearch, isLoading, setIsLoading, err, setErr }) {
  return (
    <div>
      <Navbar
        setSearch={setSearch}
        search={search}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        err={err}
        setErr={setErr}
      />
      {isLoading && (
        <h1 className="text-2xl text-center bg-[#fdf2e9] h-full">Loading...</h1>
      )}
      {!isLoading && err && <Error err={err} />}
      {!isLoading && !err && <Catagorycomponents catagoryBooks={search} />}
      <Footer />
    </div>
  );
}

export default Search;
