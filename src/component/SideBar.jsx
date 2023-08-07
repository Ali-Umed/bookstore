/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

let images = [
  {
    id: 0,
    img: "book2.png",
    offer: "bronze offer",
    subtitle: " Best thing in life is reading",
    text: "remember if you need water or food  your mind need reading ",
  },
  {
    id: 1,
    img: "bookk.png",
    offer: "special offer",
    subtitle: " There is nothing better than to read",
    text: "remember if you need water or food  your mind need reading ",
  },
  {
    id: 2,
    img: "book2.png",
    offer: "epic offer",
    subtitle: " Reading every time will open your mind  ",
    text: "remember if you need water or food  your mind need reading ",
  },
];

function SideBar() {
  const [active, setActive] = useState(0);

  function handleActiveCircle(id) {
    setActive(id);
  }

  useEffect(function() {
    const timer = setTimeout(() => {
      setActive(1);
      console.log("af");
    }, 1000);
  }, []);

  return (
    <div className="w-full bg-[#0b7c6b] relative h-[60rem] overflow-hidden">
      <div className="grid grid-cols-2 py-[10rem] px-[20rem] h-full justify-items-center items-center justify-center  ">
        <div className="text-white  ">
          <h2
            className={`text-5xl  transition-opacity duration-[10000ms] ${
              active === images[active].id ? " opacity-80" : "opacity-0"
            } `}
          >
            {images[active].offer}
          </h2>
          <h1
            className={`text-8xl mt-12 transition-opacity duration-[10000ms]  ${
              active === images[active].id ? " opacity-100 " : "opacity-0"
            } `}
          >
            {images[active].subtitle}
          </h1>

          <h3
            className={`text-4xl mt-12   transition-opacity duration-[10000ms] 
          ${active === images[active].id ? " opacity-70" : "opacity-0"}
          `}
          >
            {images[active].text}
          </h3>
          <button className="  mt-8 text-2xl bg-[white] rounded-3xl font-semibold px-12 py-3 text-[#0b7c6b] ">
            SHOP NOW
          </button>
        </div>
        <div className="h-full w-[75%] center">
          <div className="relative h-full">
            {images.map(img => (
              <img
                key={img.id}
                className={`absolute transition-opacity duration-700 w-full h-full  ${
                  active === img.id ? "opacity-100" : "opacity-0"
                }`}
                src={img.img}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-3 absolute bottom-0 left-1/2">
          {images.map(img => (
            <Circle
              key={img.id}
              img={img}
              active={active}
              handleActiveCircle={handleActiveCircle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Circle({ img, active, handleActiveCircle }) {
  return (
    <div
      className={`w-6 h-6 border border-white rounded-xl transition-all duration-300 ${
        active === img.id ? "bg-white" : ""
      } `}
      onClick={() => handleActiveCircle(img.id)}
    ></div>
  );
}

export default SideBar;
