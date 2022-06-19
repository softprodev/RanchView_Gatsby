import React from "react";

const BackButton = ({ onClick }) => {
  return (
    <button
      className="group absolute top-8 flex items-center space-x-2 text-primary-900 no-underline hover:text-primary-500 md:top-10"
      type="button"
      onClick={onClick}
    >
      <i className="far fa-arrow-left"></i>
      <span className="text-sm font-bold md:text-base">Go Back</span>
    </button>
  );
};

export default BackButton;
