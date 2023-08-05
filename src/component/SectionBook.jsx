/* eslint-disable react/prop-types */
function SectionBook({ itme }) {
  return (
    <li className="  relative  ">
      <div className=" shadow-img  shadow-inner shadow-gray-700/10 "></div>

      <div className="absolute img-card -top-0 left-[40%] -translate-x-1/2 w-full     ">
        <img src={itme.img} alt="" className="img w-[150px] h-[16rem]   " />
      </div>
    </li>
  );
}

export default SectionBook;
