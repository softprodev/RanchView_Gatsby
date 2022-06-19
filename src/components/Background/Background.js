import React from "react";
import { BgImage } from "gbimage-bridge";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledBackground = styled(BgImage)`
  &:before,
  &:after {
    ${({ mobileRemoveBackground }) =>
      mobileRemoveBackground && tw`!hidden md:!block`};
  }
`;

const Background = ({
  children,
  backgroundColor,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  padding,
  mobileRemoveBackground,
  className,
}) => (
  <div>
    {backgroundImage ? (
      <StyledBackground
        className={`${padding || ""} ${className || ""}`}
        image={backgroundImage}
        mobileRemoveBackground={mobileRemoveBackground}
        style={{
          backgroundSize: backgroundSize || "cover",
          backgroundPosition: backgroundPosition || "center",
          backgroundRepeat: backgroundRepeat || "no-repeat",
        }}
      >
        <div className="container">{children}</div>
      </StyledBackground>
    ) : (
      <section className={` ${backgroundColor} ${padding} ${className || ""}`}>
        <div className="container">{children}</div>
      </section>
    )}
  </div>
);

export default Background;
