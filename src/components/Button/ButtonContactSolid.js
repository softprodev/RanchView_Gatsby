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
      className={`group relative inline-flex min-h-[46px] min-w-[180px] items-center justify-center rounded-lg border px-4 py-2 text-center font-body font-bold no-underline ${
        altStyle === 2
          ? ""
          : "border-primary-500 hover:bg-white hover:text-primary-500 text-white bg-primary-500"
      } ${className || ""} ${className || ""}`}
      {...(anchor ? { to: href } : link ? { to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      <div className="relative z-10">
        {text}
        {icon && (
          <i
            className={`relative left-0 ml-2 text-lg transition-all duration-300 ease-linear group-hover:left-2 ${
              altStyle ? "text-white" : "text-gray-900"
            } ${icon}`}
          ></i>
        )}
      </div>
    </Tag>
  );
};

export default Button;
