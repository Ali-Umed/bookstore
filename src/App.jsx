/* eslint-disable react/prop-types */
const sectionImg = [
  {
    id: 1,
    img: "book2.png",
  },
  {
    id: 2,
    img: "book2.png",
  },
  {
    id: 3,
    img: "book2.png",
  },
  {
    id: 4,
    img: "book2.png",
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
    img: "book2.png",
  },
];

const discountImages = [
  {
    id: 1,
    img: "./public/bgdiscount1.jpg",
    typeOfDiscount: "summer sale",
    currentDiscount: "Sale 25% of",
  },
  {
    id: 2,
    img: "./public/bgdiscount2.jpg",
    typeOfDiscount: "novel every day",
    currentDiscount: "Sale 45% of",
  },
];

function App() {
  return (
    <div className="">
      <Navbar />
      <Main />
      <SectionBookList />
      <DiscountComponents />
    </div>
  );
}

export default App;

function Navbar() {
  return (
    <header className="flex justify-between items-center bg-[#fdf2e9] py-0 px-[4.8rem] h-[9.6rem]">
      <img src="logo1.png " className=" h-[8rem] w-32" alt="" />
      <nav>
        <ul className="flex items-center gap-[3.2rem]">
          <li>
            <a className="main-nav-link" href="">
              Home
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="">
              Pages
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="">
              {" "}
              Shop
            </a>
          </li>
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

function Main() {
  return (
    <section className="bg-[#fdf2e9] pt-[4.8rem] pb-9.6">
      <div className="max-w-[130rem] my-0 mx-auto px-[3.2rem] grid  gap-24 items-center  grid-cols-2">
        <div>
          <h1 className="heading-primary">
            {" "}
            There is nothing better than to Read
          </h1>
          <p className="text-[2rem] mb-[4.8rem] leading-[1.6]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            nulla! Placeat obcaecati ducimus delectus illo suscipit quis.
            Nesciunt, nobis deleniti!
          </p>

          <a href="#" className="btn btn--full margin-right-sm">
            Start eating well
          </a>
          <a href="#" className="btn btn--outline">
            Learn more &darr;
          </a>

          <div className="delivered-books  mt-[8rem] flex items-center gap-[1.6rem] ">
            <div className="delivered-imgs flex ">
              <img src="book4.jpg" />
              <img src="book3.jpg" />
              <img src="book2.jpg" />
              <img src="book3.jpg" />
              <img src="book2.jpg" />
              <img src="book4.jpg" />
            </div>
            <p className="delivered-text text-[1.8rem font-semibold]">
              1<span className=" text-[#cf711f] font-bold">250,000+</span> books
              delivered last year!
            </p>
          </div>
        </div>

        <div className="hero-img-box  ">
          <img src="book2.png" className=" w-[97%] h-[600px]" alt="" />
        </div>
      </div>
    </section>
  );
}

function SectionBookList() {
  return (
    <div className="bg-[#fdf2e9] h-[32rem] pt-[9.6rem]">
      <ul className="flex gap-[6rem]  px-[15rem]  items-center   relative">
        <button className="btn--absloute btn--left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="btn-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="btn--absloute btn--right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="btn-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        {sectionImg.map(img => (
          <SectionBook key={img.id} itme={img} />
        ))}
      </ul>
    </div>
  );
}

function SectionBook({ itme }) {
  return (
    <li className="  relative  ">
      <div className=" shadow-img   "></div>

      <div className="absolute img-card -top-10 left-[55%] -translate-x-2/4 w-full  ">
        <img src={itme.img} alt="" className="img w-[11rem] h-[16rem]" />
      </div>
    </li>
  );
}

function DiscountComponents() {
  return (
    <div className="grid grid-cols-2    justify-items-center  pt-[7.6rem]  bg-[#fdf2e9] ">
      {" "}
      {discountImages.map(item => (
        <DiscountComponent item={item} key={item.id} />
      ))}
    </div>
  );
}

function DiscountComponent({ item }) {
  return (
    <div className=" card-zoom relative flex overflow-hidden   shadow-[#000] w-[55rem] h-[30rem] rounded-[5%]">
      <div
        style={{ backgroundImage: "url(" + item.img + ")" }}
        className={`card-zoom-image     absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover`}
      ></div>
      <div className="flex flex-col px-[2rem] gap-y-[2rem] mt-[5rem]">
        <div className=" card-zoom-text  text-2xl   font-black transition-all duration-500 ease-in-out transform text-white/80">
          {item.typeOfDiscount}
        </div>
        <div className=" card-zoom-text  text-3xl   font-black transition-all duration-500 ease-in-out transform text-white ">
          {item.currentDiscount}
        </div>
        <button className=" card-zoom-text px-[2.4rem] py-[1.2rem] rounded-[9px] text-[1.8rem] bg-[#e67e22]  hover:bg-[#cf711f]  font-black transition-all duration-500 ease-in-out transform text-white ">
          Shop Now
        </button>
      </div>
    </div>
  );
}
