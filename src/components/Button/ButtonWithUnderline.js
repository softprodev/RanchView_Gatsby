import React from "react";
import Link from "gatsby-plugin-transition-link";

const Button = ({
  className,
  href,
  outboundLink,
  modal,
  onClick,
  type,
  altStyle,
  text,
}) => {
  const Tag = href ? Link : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:") && !href.includes("mailto:"));

  return (
    <Tag
      className={`group relative inline-flex font-bold text-primary-500 hover:text-primary-500 ${className}`}
      {...(link ? { to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      <div className="relative">
        {text}
        <span className="absolute -bottom-2 left-0 right-auto h-0.5 w-full bg-primary-500 transition-all duration-500 ease-in-out group-hover:left-auto group-hover:right-0 group-hover:w-0"></span>
      </div>
    </Tag>
  );
};

export default Button;
