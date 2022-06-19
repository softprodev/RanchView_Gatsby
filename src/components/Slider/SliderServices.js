import React, { Component } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonGhost from "../Button/ButtonGhost";

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
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      nav3: null,
      currentSlide: 0,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      nav3: this.slider3,
    });
  }

  handleAfterChange = (index) => {
    this.setState({
      currentSlide: index,
    });
  };

  nextSlide = () => {
    this.state.nav2.slickNext();
  };
  prevSlide = () => {
    this.state.nav2.slickPrev();
  };

  render() {
    const sliderContentSettings = {
      arrows: true,
      dots: false,
      speed: 750,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      swipeToSlide: true,
      asNavFor: this.state.nav1,
      ref: (slider) => (this.slider2 = slider),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            fade: true,
          },
        },
      ],
    };
    const sliderNavSettings = {
      arrows: false,
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      afterChange: this.handleAfterChange,
      asNavFor: this.state.nav2,
      ref: (slider) => (this.slider1 = slider),
    };

    const sliderImageSettings = {
      arrows: false,
      dots: false,
      speed: 750,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      swipeToSlide: true,
      asNavFor: this.state.nav2,
      afterChange: this.handleAfterChange,
      ref: (slider) => (this.slider1 = slider),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            centerMode: true,
          },
        },
      ],
    };

    return (
      <StyledSlider className="relative">
        <div className="absolute left-0 z-10 h-full w-full -translate-x-full transform bg-white"></div>
        <div className="grid grid-cols-1 items-center gap-y-10 md:grid-cols-12 md:gap-x-6">
          <div className="relative z-20 md:col-span-3 md:col-start-1 md:h-full md:bg-white md:pt-16">
            <Slick
              className="slider-nav hidden md:block"
              {...sliderNavSettings}
            >
              {this.props.slides.map((slide, i) => {
                return (
                  <div key={i}>
                    <div className="relative inline-flex cursor-pointer pb-0.5 text-sm font-bold text-primary-500 transition-all duration-300 ease-linear after:absolute after:bottom-0 after:left-auto after:right-0 after:h-0.5 after:w-0 after:bg-primary-500 after:transition-all after:duration-500 after:ease-in-out md:mb-2.5 md:text-primary-900/50">
                      {slide.heading}
                    </div>
                  </div>
                );
              })}
            </Slick>

            <Slick
              className="slider-images md:!hidden"
              {...sliderImageSettings}
            >
              {this.props.slides.map((slide, i) => {
                return (
                  <div key={i}>
                    <GatsbyImage
                      image={slide.image}
                      alt={slide.heading}
                      className="z-0 scale-75 transform rounded-4xl transition-all duration-300 ease-linear"
                    />
                  </div>
                );
              })}
            </Slick>

            <div className="absolute bottom-0 right-2 flex items-center justify-end md:hidden">
              <div className="text-sm text-primary-900/50">
                0{this.state.currentSlide + 1} / 0{this.props.slides.length}
              </div>
            </div>
          </div>

          <div className="md:col-span-9 md:col-end-13">
            <Slick className="slider-content" {...sliderContentSettings}>
              {this.props.slides.map((slide, i) => {
                return (
                  <>
                    <div
                      className="grid gap-y-10 md:grid-cols-2 md:gap-x-10 lg:gap-x-20"
                      key={i}
                    >
                      <div className="hidden md:block">
                        <GatsbyImage
                          image={slide.image}
                          alt={slide.heading}
                          className="z-0 rounded-4xl"
                        />
                      </div>
                      <div className="md:pr-10 lg:pt-18 lg:pr-16">
                        <h3 className="heading-four">{slide.heading}</h3>
                        <p>{slide.text}</p>
                        {slide.link && (
                          <ButtonGhost
                            altStyle={2}
                            href={slide.link}
                            text="Learn More"
                          />
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
            </Slick>
          </div>

          <div className="absolute right-0 bottom-0 hidden items-center md:mr-10 md:flex lg:mr-18">
            <button
              onClick={this.prevSlide}
              className={`group mr-4 hidden h-12 w-12 items-center justify-center rounded-lg bg-tertiary-50 no-underline hover:bg-primary-500 focus:outline-none md:flex ${
                this.state.currentSlide === 0 && "opacity-0"
              }`}
            >
              <i className="far fa-chevron-left text-2xl text-primary-500 transition-all duration-300 ease-linear focus:no-underline group-hover:text-white"></i>
            </button>

            <button
              onClick={this.nextSlide}
              className={`group hidden h-12 w-12 items-center justify-center rounded-lg bg-tertiary-50 no-underline hover:bg-primary-500 focus:outline-none md:flex ${
                this.state.currentSlide === this.props.slides.length - 1 &&
                "opacity-0"
              }`}
            >
              <i className="far fa-chevron-right text-2xl text-primary-500 transition-all duration-300 ease-linear focus:no-underline group-hover:text-white"></i>
            </button>
          </div>
        </div>
      </StyledSlider>
    );
  }
}
