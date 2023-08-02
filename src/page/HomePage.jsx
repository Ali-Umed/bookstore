/* eslint-disable react/prop-types */
import Catagorycomponents from "../component/Catagorycomponents";
import DiscountComponents from "../component/DiscountComponents";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import SectionBookList from "../component/SectionBookList";

function HomePage({
  catagoryBestSellingBook,
  popularBook,
  sectionImg,
  catagoryBooks,
  discountImages,
}) {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SectionBookList sectionImg={sectionImg} />
      <DiscountComponents discountImages={discountImages} />
      <Catagorycomponents catagoryBooks={catagoryBooks} />
      <Catagorycomponents catagoryBooks={catagoryBestSellingBook} />
      <Catagorycomponents catagoryBooks={popularBook} />
      <Footer />
    </div>
  );
}

export default HomePage;
