function Hero() {
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
              <span className=" text-[#cf711f] font-bold">250,000+</span> books
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

export default Hero;
