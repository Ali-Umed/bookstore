/* eslint-disable react/prop-types */
import Catagorycomponents from "../component/Catagorycomponents";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function Products({ catagoryBooks, catagoryBestSellingBook, popularBook }) {
  return (
    <div>
      <Navbar />
      <Catagorycomponents catagoryBooks={catagoryBooks} />
      <Catagorycomponents catagoryBooks={catagoryBestSellingBook} />
      <Catagorycomponents catagoryBooks={popularBook} />
      <Footer />
    </div>
  );
}

export default Products;
