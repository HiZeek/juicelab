import React from "react";

const BlueButton = ({ className, type, onClick, children }) => {
  return (
    <button
      className={`bg-lightColor rounded-2xl py-4 px-6 font-bold border border-borderColor font-sans-serif text-textBlue ${className}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BlueButton;
