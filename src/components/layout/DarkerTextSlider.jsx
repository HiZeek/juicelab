import React from "react";

const DarkerTextSlider = () => {
  const textStyle = "text-[black] font-bold font-sans-serif text-xl";
  return (
    <div className="bg-lighterYellow opacity-20 border-y border-[black]">
      <div className="flex justify-evenly p-5 dark-slider-wrap">
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
  );
};

export default DarkerTextSlider;
