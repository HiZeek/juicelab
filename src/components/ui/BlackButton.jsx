import React from "react";

const BlackButton = ({ className, type, onClick, children }) => {
  return (
    <button
      className={`bg-darkColor rounded-2xl py-4 px-6 font-bold border border-borderColor font-sans-serif text-textBlue ${className}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BlackButton;
// custom-border
