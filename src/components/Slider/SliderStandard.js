import React, { useRef, useEffect, useState } from "react";
import Slick from "react-slick";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-dots {
    ${tw`relative! md:absolute! flex! justify-center space-x-2 mt-6 md:mt-0 md:-bottom-10! z-10`}
    li {
      ${tw`mr-0 flex items-center justify-center`}
      ${tw`h-2 w-2`}
      &.slick-active {
        button {
          ${tw`bg-primary-500`}
        }
      }
    }
    button {
      ${tw`bg-primary-500/40 h-2 w-2 m-0`}
    }
  }
`;

const Slider = ({ slides }) => {
  const slider = useRef();

  const [slideIndex] = useState(0);

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  const sliderSettings = {
    dots: true,
    arrows: false,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    // responsive: [
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       arrows: false,
    //     },
    //   },
    // ],
  };

  return (
    <>
      <StyledSlider className="mx-auto max-w-[720px]">
        <Slick {...sliderSettings} ref={slider}>
          {slides.slice(0, 3).map((testimonial, i) => {
            return (
              <div key={i}>
                <blockquote className="text-center">
                  <footer className="mb-10">
                    <div>
                      {testimonial.profilePicture &&
                        testimonial.profilePicture.asset && (
                          <div className="mb-2 justify-center rounded-full">
                            <GatsbyImage
                              image={
                                testimonial.profilePicture.asset.gatsbyImageData
                              }
                              loading="lazy"
                              className="z-0 rounded-full"
                            />
                          </div>
                        )}
                      <cite className="not-italic">
                        <div className="mb-0 text-xl font-medium text-typography-heading">
                          {testimonial.name}
                        </div>
                        {testimonial.businessNameTitle && (
                          <div className="text-sm font-medium uppercase tracking-widest text-gray-300">
                            {testimonial.businessNameTitle}
                          </div>
                        )}
                      </cite>
                    </div>
                  </footer>

                  <q className="mb-10 before:hidden">{testimonial.review}</q>

                  {/* <img src={stars} className="mb-3" /> */}

                  <div>
                    {testimonial.platform === "Google" && (
                      <StaticImage
                        src="../../images/reviews/Google.png"
                        loading="lazy"
                        width={62}
                      />
                    )}

                    {testimonial.platform === "Yelp" && (
                      <StaticImage
                        src="../../images/reviews/Yelp.png"
                        loading="lazy"
                        width={61}
                      />
                    )}

                    {testimonial.platform === "Facebook" && (
                      <StaticImage
                        src="../../images/reviews/facebook.png"
                        loading="lazy"
                        width={99}
                      />
                    )}
                  </div>
                </blockquote>
              </div>
            );
          })}
        </Slick>
      </StyledSlider>
    </>
  );
};

export default Slider;
