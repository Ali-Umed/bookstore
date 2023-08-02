/* eslint-disable react/prop-types */
import DiscountComponent from "./DiscountComponent";

function DiscountComponents({ discountImages }) {
  return (
    <div className="grid grid-cols-2    justify-items-center  pt-[7.6rem]  bg-[#fdf2e9] ">
      {" "}
      {discountImages.map(item => (
        <DiscountComponent item={item} key={item.id} />
      ))}
    </div>
  );
}

export default DiscountComponents;
