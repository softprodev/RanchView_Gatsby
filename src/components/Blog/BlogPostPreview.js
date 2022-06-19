import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "gatsby-plugin-transition-link";
// import { differenceInDays, formatDistance, format } from "date-fns";

import { getBlogUrl } from "../../lib/helpers";
// import { getBlogUrl, toPlainText } from "../../lib/helpers";
// import PortableText from "./portableText";

function BlogPostPreview(props) {
  // const truncate = (str) => {
  //   return str.length > 200 ? str.substring(0, 200) + "..." : str;
  // };

  return (
    <Link
      to={getBlogUrl(props.slug.current)}
      className="group block font-normal text-typography-body no-underline hover:text-typography-body"
    >
      {props.featuredImage && props.featuredImage.asset ? (
        <div className="mb-5 overflow-hidden rounded-xl">
          <GatsbyImage
            image={props.featuredImage.asset.gatsbyImageData}
            loading="lazy"
            className="w-full scale-100 transform blur-none filter transition-all duration-500 ease-linear md:group-hover:scale-105"
          />
        </div>
      ): (
        <div className="mb-5 overflow-hidden rounded-xl">
          <p>This is a blank image</p>
          {/* <GatsbyImage
            src="../../images/5.0 Amenities/1.0 Amenities-mobile.jpg"
            alt="The Ranch View Lifestyle"
            loading="eager"
            placeholder="none"
            // className="h-full w-full"
            imgClassName="object-top"
            className="object-top w-full scale-100 transform blur-none filter transition-all duration-500 ease-linear md:group-hover:scale-105"
          /> */}
        </div>

      )
      }
      <div className="mb-1 flex flex-wrap items-center font-body text-sm font-medium uppercase tracking-wide text-primary-900/40 md:flex-nowrap">
        {props.categories && (
          <ul className="flex flex-wrap md:flex-nowrap">
            {props.categories.map((category, i) => (
              <li
                className="font-heading text-sm font-extrabold uppercase tracking-wide text-gray-300"
                key={i}
              >
                {i > 0 ? <>, {category.title}</> : category.title}
              </li>
            ))}
          </ul>
        )}

        {/* {props.publishedAt && (
          <div>
            {differenceInDays(new Date(props.publishedAt), new Date()) > 3
              ? formatDistance(new Date(props.publishedAt), new Date())
              : format(new Date(props.publishedAt), "MMMM d, yyyy")}
          </div>
        )} */}
      </div>
      <div className="font-heading text-xl text-primary-900">{props.title}</div>
    </Link>
  );
}

export default BlogPostPreview;
