/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SectionBook from "./SectionBook";

function SectionBookList({ sectionImg }) {
  let [current, Setcurrent] = useState(0);
  let [sectionimg, setSectionImg] = useState(sectionImg);

  useEffect(
    function() {
      function CurrentImage() {
        setSectionImg(
          sectionImg.filter((item, index) => index < imagePerPage + current)
        );
      }
      CurrentImage();
    },
    [current]
  );

  let length = sectionImg.length;
  let imagePerPage = 7;
  let k = length - imagePerPage;

  sectionimg = sectionimg.filter((item, index) => {
    return index >= current;
  });

  console.log(sectionimg);
  function next() {
    if (k > current) Setcurrent(cur => cur + 1);
  }

  function preview() {
    if (0 < current) Setcurrent(cur => cur - 1);
  }

  return (
    <div className="">
      <div className="bg-[#fdf2e9] h-[32rem] pt-[9.6rem] px-[4rem] overflow-hidden  ">
        <div className="flex gap-x-[2rem] justify-center items-center">
          <button className="btn--flex" onClick={() => preview()}>
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

          <ul className="flex gap-[6rem]     overflow-hidden">
            {sectionimg.map(img => (
              <SectionBook key={img.id} itme={img} />
            ))}
          </ul>
          <button className="btn--flex " onClick={() => next()}>
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
        </div>
      </div>
    </div>
  );
}

export default SectionBookList;
