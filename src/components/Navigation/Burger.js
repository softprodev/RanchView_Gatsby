import React from "react";
import { bool, func } from "prop-types";
import styled from "@emotion/styled";

const StyledBurger = styled.button`
  .line {
    transform-origin: 1px;
    &:first-of-type {
      transform: ${({ offcanvasOpen }) =>
        offcanvasOpen ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-of-type(2) {
      transform: ${({ offcanvasOpen }) =>
        offcanvasOpen ? "translateX(20px)" : "translateX(0)"};
    }
    &:nth-of-type(3) {
      transform: ${({ offcanvasOpen }) =>
        offcanvasOpen ? "translateY(2px) rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const Burger = ({
  offcanvasOpen,
  setOffcanvasOpen,
  navigationStyle,
  scrolled,
}) => {
  const isExpanded = offcanvasOpen ? true : false;
  return (
    <StyledBurger
      className="relative z-30 flex h-4 w-auto cursor-pointer flex-col justify-between border-0 bg-transparent focus:outline-none"
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      offcanvasOpen={offcanvasOpen}
      onClick={() => setOffcanvasOpen(!offcanvasOpen)}
      navigationStyle={navigationStyle}
      scrolled={scrolled}
    >
      <div
        className={`line relative z-10 h-[2px] w-6 transition-all duration-300 ease-linear ${
          navigationStyle === "overlap" ? "bg-white" : "bg-gray-900"
        } ${scrolled && "bg-gray-900"} ${offcanvasOpen && "bg-gray-900"}`}
      />
      <div
        className={`line relative z-10 h-[2px] w-6 transition-all duration-300 ease-linear ${
          navigationStyle === "overlap" ? "bg-white" : "bg-gray-900"
        } ${scrolled && "bg-gray-900"} ${offcanvasOpen && "bg-gray-900"} ${
          offcanvasOpen && "opacity-0"
        }`}
      />
      <div
        className={`line relative z-10 h-[2px] w-6 transition-all duration-300 ease-linear ${
          navigationStyle === "overlap" ? "bg-white" : "bg-gray-900"
        } ${scrolled && "bg-gray-900"} ${offcanvasOpen && "bg-gray-900"}`}
      />
    </StyledBurger>
  );
};

Burger.propTypes = {
  offcanvasOpen: bool.isRequired,
  setOffcanvasOpen: func.isRequired,
};

export default Burger;
