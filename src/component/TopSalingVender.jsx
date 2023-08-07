/* eslint-disable react/prop-types */
function TopSalingVender({ catagoryBooks, type }) {
  const catagory = catagoryBooks.filter((item, index) => index < 4);

  return (
    <div className="w-full   bg-[#fdf2e9]  py-[6rem] pt-[9rem]  lg:px-[10rem]">
      <div className="flex justify-between">
        <h3 className="text-4xl text-[#e67e22] font-bold">
          Top Selling Vender
        </h3>
        <h6 className="text-2xl text-[#e67e22]/80">view all product</h6>
      </div>

      <div className="grid w-full grid-cols-4   gap-[3rem] gap-y-[6rem]">
        {catagory.map((item, index) => (
          <Vender key={item.isbn13} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

function Vender({ item, type }) {
  return (
    <div className="grid grid-cols-3    items-center justify-start ">
      <div className="col-span-2     ">
        {" "}
        <img src={item.image} className=" w-[23rem] h-[33rem]" alt="" />{" "}
      </div>
      <div className="w-full flex flex-col ">
        <img src={item.image} alt="" className="   " />
        <img src={item.image} alt="" className=" " />{" "}
      </div>
      <div className="flex gap-3 self-center  col-span-3 ">
        <div className="">
          <img src="logo1.png" className="w-44 h-20 rounded-full " alt="" />
        </div>
        <div className="flex flex-col gap-0 ">
          <div className="text-black text-2xl font-black ">
            {" "}
            Book House.{" "}
            <span className="text-gray-500 text-sm">(6 products)</span>
          </div>
          <div>⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </div>
  );
}

export default TopSalingVender;
