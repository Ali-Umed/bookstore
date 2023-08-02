import Catagorycomponent from "./Catagorycomponent";

/* eslint-disable react/prop-types */
function Catagorycomponents({ catagoryBooks }) {
  return (
    <div className="px-[10rem] bg-[#fdf2e9] py-[6rem] pt-[9rem]">
      <div className="flex justify-between">
        <h3 className="text-4xl text-[#e67e22] font-bold">
          {catagoryBooks[0].catagory}
        </h3>
        <h6 className="text-2xl text-[#e67e22]/80">view all product</h6>
      </div>
      <div className="grid grid-cols-6 gap-[3rem]">
        {catagoryBooks.map((item, index) => (
          <Catagorycomponent key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Catagorycomponents;
