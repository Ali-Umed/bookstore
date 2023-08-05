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
  search,
  setSearch,
  isLoading,
  setIsLoading,
  err,
  setErr,
}) {
  return (
    <div className="">
      <Navbar
        setSearch={setSearch}
        search={search}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        err={err}
        setErr={setErr}
      />
      <Hero />
      <SectionBookList sectionImg={sectionImg} />
      <DiscountComponents discountImages={discountImages} />
      <Catagorycomponents catagoryBooks={catagoryBooks} type={"Trending Now"} />
      <Catagorycomponents
        catagoryBooks={catagoryBestSellingBook}
        type={"Best Saling Book"}
      />
      <Catagorycomponents catagoryBooks={popularBook} type={"Popular Book"} />
      <Footer />
    </div>
  );
}

export default HomePage;
