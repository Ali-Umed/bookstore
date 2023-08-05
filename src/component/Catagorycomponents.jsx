import Catagorycomponent from "./Catagorycomponent";

/* eslint-disable react/prop-types */
function Catagorycomponents({ catagoryBooks, type }) {
  return (
    <div className="w-full  lg:px-[10rem] bg-[#fdf2e9]  py-[6rem] pt-[9rem]">
      <div className="flex justify-between">
        <h3 className="text-4xl text-[#e67e22] font-bold">
          {catagoryBooks[0]?.catagory || type}
        </h3>
        <h6 className="text-2xl text-[#e67e22]/80">view all product</h6>
      </div>
      <div className="grid w-full grid-cols-2   lg:grid-cols-6 gap-[3rem] gap-y-12">
        {catagoryBooks.map((item, index) => (
          <Catagorycomponent key={item.isbn13} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Catagorycomponents;
