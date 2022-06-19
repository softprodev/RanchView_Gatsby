import React from "react";

const PromoBar = ({ navigationStyle }) => {
  return (
    <div
      id="promo-bar"
      className={`relative py-2 text-center ${
        navigationStyle === "overlap" ? "" : ""
      }`}
    >
      <div className="container"></div>
    </div>
  );
};
export default PromoBar;
