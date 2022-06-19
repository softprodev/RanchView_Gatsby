import React from "react";
import { BgImage } from "gbimage-bridge";
// import styled from "@emotion/styled";
// import tw from "twin.macro";

// const StyledBackgroundImage = styled(BgImage)``;

const Hero = ({
  className,
  heading,
  subtext,
  image,
  imageMaxHeight,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  nextBackgroundColor,
  children,
}) => (
  <section className={`${nextBackgroundColor} ${className || ""}`}>
    <div className={`${imageMaxHeight || "h-[350px] md:h-[550px]"}`}>
      <BgImage
        className="h-full"
        image={image}
        style={{
          backgroundSize: backgroundSize || "cover",
          backgroundPosition: backgroundPosition || "center",
          backgroundRepeat: backgroundRepeat || "no-repeat",
        }}
      ></BgImage>
    </div>
    <div className="container">
      <div className="relative bottom-10 rounded-xl bg-primary-500 px-6 pt-14 pb-14 text-center shadow-2xl md:bottom-28 md:pt-16 md:pb-14">
        <h1>{heading}</h1>
        <p className="font-heading text-xl font-medium italic md:text-3xl">
          {subtext}
        </p>
        {children}
      </div>
    </div>
  </section>
);

export default Hero;
