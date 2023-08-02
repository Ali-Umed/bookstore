/* eslint-disable react/prop-types */
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
        <button className=" card-zoom-text px-[2.4rem] py-[1.2rem] rounded-[9px] text-[1.8rem] bg-[#e67e22]  hover:bg-[#cf711f] font-medium transition-all duration-500 ease-in-out transform text-black ">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default DiscountComponent;
