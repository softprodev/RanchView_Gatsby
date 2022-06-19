import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { mapEdgesToNodes } from "../../lib/helpers";
import Slider from "../Slider/SliderStandard";
import { StaticImage } from "gatsby-plugin-image";

const Testimonial = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      testimonials: allSanityTestimonials(
        sort: { fields: [date], order: DESC }
      ) {
        edges {
          node {
            id
            review
            name
            profilePicture {
              asset {
                gatsbyImageData(layout: CONSTRAINED, width: 56)
              }
            }
            businessNameTitle
            featured
            platform
            categories {
              title
            }
          }
        }
      }
    }
  `);
  const testimonialsNodes = (data || {}).testimonials
    ? mapEdgesToNodes(data.testimonials).filter((items) => items.featured)
    : [];

  return (
    <section className={`relative overflow-hidden pt-40 pb-72 ${className}`}>
      <p className="text-black">testdfgdfgdfgdfgdfgdfgg445 {testimonialsNodes.length}</p>
      <div className="absolute bottom-0 left-0 hidden h-full w-full md:block">
        <StaticImage
          src="../../images/0.0 Repeated Modules/Testimonial Slider/background.jpg"
          loading="lazy"
          className="h-full"
          imgClassName="object-bottom"
        />
        
      </div>
      
      <div className="absolute bottom-0 left-0 h-full w-full md:hidden">
        <StaticImage
          src="../../images/0.0 Repeated Modules/Testimonial Slider/background-mobile.jpg"
          loading="lazy"
          className="h-full w-full"
          imgClassName="object-top"
        />
      </div>
      <div className="container">
        <Slider slides={testimonialsNodes} />
      </div>
    </section>
  );
};

export default Testimonial;
