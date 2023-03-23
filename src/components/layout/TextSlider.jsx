import React from "react";

const TextSlider = () => {
  const textStyle = "text-[black] font-bold font-sans-serif text-xl";
  return (
    // <div className="max-w-[1480px] m-auto">
    <div className="bg-lighterYellow border-y border-[black]">
      <div className="flex justify-evenly p-5 slider-wrap">
        <p className={textStyle}>Low calories</p>
        <p className={textStyle}>No added sugar</p>
        <p className={textStyle}>Low calories</p>
        <p className={textStyle}>No added sugar</p>
        <p className={textStyle}>Low calories</p>
        <p className={textStyle}>No added sugar</p>
        <p className={textStyle}>Low calories</p>
        <p className={textStyle}>No added sugar</p>
      </div>
    </div>
    // </div>
  );
};

export default TextSlider;
