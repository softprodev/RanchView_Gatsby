import React from "react";

const UtilityNav = ({ navigationStyle }) => {
  return (
    <div
      id="utlity-navigation"
      className={`hidden py-1.5 lg:block ${
        navigationStyle === "overlap" ? "" : ""
      }`}
    >
      <div className="container"></div>
    </div>
  );
};
export default UtilityNav;
