import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Link from "gatsby-plugin-transition-link";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slider-nav {
    ${tw`inset-0 hidden md:flex! flex-col relative`}
    .slick-active > div > div > div {
      ${tw`text-primary-900 after:right-auto after:left-0 after:w-full`}
    }
    .slick-track {
      ${tw`md:flex md:flex-col md:!transform-none`}
    }
  }
  .slick-slide {
    &.slick-active {
      ${tw`z-10`}
    }
  }
  .slider-content,
  .slider-images {
    .slick-list {
      ${tw`p-0! overflow-visible`}
    }
  }
  .slider-images {
    .slick-active {
      .gatsby-image-wrapper {
        ${tw`scale-100`}
      }
    }
  }
`;
// export default class Slider extends Component { 
// const Slider = ({ slides, sectionNumber }) => {
const SliderDetailServices = ({ slides, sectionNumber }) => {
    return (
      <StyledSlider className="relative bg-[#F0F6F7]">
        {slides.map((slide, i) => {
                return (
                  <div className="py-2" key={i}>

                    {i === sectionNumber ?
                    <>
                      <Link
                        to={slide.link}
                        // style={{ textDecoration: 'none' }}
                        className={`inline font-body font-semibold underline`}
                      >
                        {slide.heading}
                      </Link>
                    </>
                    : 
                    <>
                      <Link
                        to={slide.link}
                        style={{ textDecoration: 'none' }}
                        className={`inline font-body font-semibold underline`}
                      >
                        {slide.heading}
                      </Link>
                    </>}
                      
                  </div>
                );
              })}
              
      </StyledSlider>
    );
  
};
export default SliderDetailServices;

