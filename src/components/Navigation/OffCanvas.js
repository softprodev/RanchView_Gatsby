import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledOffCanvas = styled.nav`
  ${tw`bg-white fixed top-0 left-0 w-full h-screen pt-12 pb-[105px] px-6 z-10 overflow-y-scroll transition-transform duration-500 ease-in-out border-t border-gray-100`}
  transform: ${({ offcanvasOpen }) =>
    offcanvasOpen ? "translateX(0%)" : "translateX(-100%)"};
`;

const OffCanvas = ({ children, offcanvasOpen, offcanvasOffset }) => {
  const isHidden = offcanvasOpen ? true : false;

  if (typeof window !== `undefined`) {
    if (offcanvasOpen) {
      document.body.style.overflow = "hidden";
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.getElementsByTagName("html")[0].style.overflow = "";
    }
  }

  return (
    <StyledOffCanvas
      offcanvasOpen={offcanvasOpen}
      aria-hidden={!isHidden}
      style={{ top: offcanvasOffset + "px" }}
    >
      {children}
    </StyledOffCanvas>
  );
};

export default OffCanvas;
