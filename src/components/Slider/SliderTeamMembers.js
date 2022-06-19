import React, { useRef, useEffect } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import PortableText from "../Blog/portableText";
import ButtonSolid from "../Button/ButtonSolid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-slide {
    &.slick-active {
      ${tw`z-10`}
    }
  }
`;
const Slider = ({ slideIndex, slides }) => {
  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    fade: true,
    speed: 750,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Previous Arrow
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="slick-prev"
        aria-label="Previous Slide"
      >
        <i className="far fa-chevron-left"></i>
      </button>
    );
  }

  // Next Arrow
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="slick-next" aria-label="Next Slide">
        <i className="far fa-chevron-right"></i>
      </button>
    );
  }

  return (
    <StyledSlider>
      <div className="container p-0">
        <Slick {...sliderSettings} ref={slider} className="h-full">
          {slides.map((content, i) => {
            return (
              <div key={i}>
                <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-10 lg:gap-x-12">
                  <div className="md:col-span-4 md:col-start-1">
                    <GatsbyImage
                      image={content.headshot.asset.gatsbyImageData}
                      loading="lazy"
                      className="z-0 mb-6 rounded-4xl"
                    />

                    <div className="md:hidden">
                      <div className="heading-two mb-2">{content.name}</div>
                      <div className="mb-8 text-sm font-bold uppercase tracking-wide text-primary-900/40">
                        {content.title}
                      </div>
                    </div>

                    <div className="mb-6 space-y-3">
                      {content.directPhoneNumber && (
                        <a
                          href={`tel:${content.directPhoneNumber
                            .replace(/[()]/g, "")
                            .replace(/ /g, "-")}`}
                          className="flex items-center space-x-4 font-semibold text-primary-900 no-underline"
                        >
                          <i className="fa-solid fa-phone text-xl text-primary-500"></i>
                          <span>{content.directPhoneNumber}</span>
                        </a>
                      )}

                      {content.emailAddress && (
                        <a
                          href={`mailto:${content.emailAddress}`}
                          className="flex items-center space-x-4 font-semibold text-primary-900 no-underline"
                        >
                          <i className="fa-solid fa-envelope text-xl text-primary-500"></i>
                          <span>{content.emailAddress}</span>
                        </a>
                      )}

                      {content.linkedinProfile && (
                        <a
                          href={`${content.linkedinProfile}`}
                          className="flex items-center space-x-4 font-semibold text-primary-900 no-underline"
                        >
                          <i className="fa-brands fa-linkedin text-2xl text-primary-500"></i>
                          <span>LinkedIn</span>
                        </a>
                      )}
                    </div>

                    {content.hubspotID && (
                      <ButtonSolid
                        href={`/book-a-meeting/?hubspotID=${content.hubspotID}`}
                        text="Book a Meeting"
                        className="w-full"
                      />
                    )}
                  </div>

                  <div className="md:col-span-8 md:col-end-13">
                    <div className="hidden md:block">
                      <div className="heading-two mb-2">{content.name}</div>
                      <div className="mb-8 text-sm font-bold uppercase tracking-wide text-primary-900/40">
                        {content.title}
                      </div>
                    </div>
                    <PortableText blocks={content._rawBiography} />
                  </div>
                </div>
              </div>
            );
          })}
        </Slick>
      </div>
    </StyledSlider>
  );
};

export default Slider;
