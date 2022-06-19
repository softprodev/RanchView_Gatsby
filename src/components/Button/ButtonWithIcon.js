import React from "react";
import Link from "gatsby-plugin-transition-link";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Button = ({
  className,
  href,
  outboundLink,
  modal,
  onClick,
  type,
  altStyle,
  icon,
  text,
}) => {
  const Tag = href && href.includes("#") ? AnchorLink : href ? Link : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;
  let anchor = false;

  href && (link = !href.includes("tel:") && !href.includes("mailto:"));

  return (
    <Tag
      className={`group inline-flex items-center justify-center space-x-2.5 font-medium no-underline
       ${
         altStyle === 2
           ? "text-white hover:text-primary-500"
           : altStyle === 3
           ? ""
           : "text-typography-heading hover:text-primary-500"
       } ${className}`}
      {...(anchor ? { to: href } : link ? { to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      <div>{text}</div>
      <div
        className={`relative left-0 inline-flex transition-all duration-300 ease-linear group-hover:left-1 ${
          altStyle === 2 ? `` : altStyle === 3 ? `` : ``
        }`}
      >
        <i
          className={`${
            icon || "fa-regular fa-arrow-right"
          } text-xl text-primary-500`}
        ></i>
      </div>
    </Tag>
  );
};

export default Button;
