/* eslint-disable react/prop-types */
function DiscountComponent({ item }) {
  return (
    <div className="card-zoom relative flex overflow-hidden shadow-md w-[45rem] transition-all md:w-[55rem] h-[30rem] rounded-[5%]">
      <div
        style={{ backgroundImage: `url(${item.img})` }}
        className="card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover"
      ></div>
      <div className="flex flex-col px-4 gap-4 mt-4 md:mt-[5rem]">
        <div className="card-zoom-text text-xl md:text-2xl font-semibold transition-all duration-500 ease-in-out transform text-gray-100/80">
          {item.typeOfDiscount}
        </div>
        <div className="card-zoom-text text-2xl md:text-3xl font-semibold transition-all duration-500 ease-in-out transform text-gray-100">
          {item.currentDiscount}
        </div>
        <button className="card-zoom-text px-4 py-2 rounded-md text-lg md:text-xl bg-orange-500 hover:bg-orange-600 font-semibold transition-all duration-300 ease-in-out transform text-white">
          Shop Now
        </button>
      </div>
      1
    </div>
  );
}

export default DiscountComponent;
