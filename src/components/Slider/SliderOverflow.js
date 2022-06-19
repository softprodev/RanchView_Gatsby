import React, { useRef } from "react";
// import { useStaticQuery, graphql } from "gatsby";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-list,
  .slick-slider {
    position: inherit;
  }
  .slick-track {
    ${tw`ml-0`}
  }
  .slick-slide > div {
    ${tw`mx-2 md:mx-5`}
  }
  .slick-list {
    ${tw`md:-mx-5 p-0! overflow-visible`}
  }
  .slick-arrow {
    ${tw`w-12 h-12 rounded-full bg-primary-500 hover:bg-primary-500 flex items-center justify-center text-white hover:text-white text-xl no-underline transform-none`}
  }
  .slick-prev {
    ${tw`left-4`}
  }
  .slick-next {
    ${tw`right-4`}
  }
`;

const Slider = ({ children }) => {
  const slider = useRef();

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="slick-arrow slick-prev group"
        aria-label="Previous Slide"
      >
        <i className="far fa-arrow-left"></i>
      </button>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="slick-arrow slick-next group"
        aria-label="Next Slide"
      >
        <i className="far fa-arrow-right"></i>
      </button>
    );
  }

  const sliderSettings = {
    dots: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 7500,
    centerMode: true,
    slidesToShow: 3,
    initialSlide: 1,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <StyledSlider>
      <div className="absolute left-0 top-0 z-10 h-full w-full -translate-x-full transform bg-white"></div>
      <Slick {...sliderSettings} ref={slider}>
        {children}
      </Slick>
    </StyledSlider>
  );
};

export default Slider;
