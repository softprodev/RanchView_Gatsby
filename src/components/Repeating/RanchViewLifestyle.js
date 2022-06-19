import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const About = ({ headingLevel, className, hide }) => {
  const HeadingTag = headingLevel || "h2";

  return (
    <section className={` ${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        <header className="mb-12 md:mb-16">
          <HeadingTag>The RanchView Lifestyle</HeadingTag>
        </header>
        <div className="grid gap-y-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-10">
          {hide !== 1 && (
            <Link
              to="/about"
              className="group block font-normal text-typography-body no-underline hover:text-typography-body"
            >
              <div className="overflow-hidden rounded-3xl">
                <StaticImage
                  src="../../images/0.0 Repeated Modules/RanchView Lifestyle/Staff.jpg"
                  loading="lazy"
                  width={746}
                  className="w-full"
                />
              </div>
              <div className="pt-6">
                <h3 className="heading-four">About Our Staff</h3>
                <p className="mb-0">
                  We’re a highly trained team that is caring, compassionate, and
                  full of heart.
                </p>
              </div>
            </Link>
          )}

          {hide !== 2 && (
            <Link
              to="/amenities"
              className="group block font-normal text-typography-body no-underline hover:text-typography-body"
            >
              <div className="overflow-hidden rounded-3xl">
                <StaticImage
                  src="../../images/0.0 Repeated Modules/RanchView Lifestyle/Amenities.jpg"
                  loading="lazy"
                  width={746}
                  className="w-full"
                />
              </div>
              <div className="pt-6">
                <h3 className="heading-four">The Amenities</h3>
                <p className="mb-0">
                  RanchView has a variety of amenities—from on-site culinary
                  staff to live music and a spacious patio area for relaxation
                  and get-togethers.
                </p>
              </div>
            </Link>
          )}

          {hide !== 3 && (
            <Link
              to="/neighborhood"
              className="group block font-normal text-typography-body no-underline hover:text-typography-body"
            >
              <div className="overflow-hidden rounded-3xl">
                <StaticImage
                  src="../../images/0.0 Repeated Modules/RanchView Lifestyle/Neighborhood.jpg"
                  loading="lazy"
                  width={746}
                  className="w-full"
                />
              </div>
              <div className="pt-6">
                <h3 className="heading-four">The Neighborhood</h3>
                <p className="mb-0">
                  We’re located north of San Diego on a sprawling property in an
                  unincorporated area between Encinitas and Rancho Santa Fe.
                </p>
              </div>
            </Link>
          )}

          {hide !== 4 && (
            <Link
              to=""
              className="group block font-normal text-typography-body no-underline hover:text-typography-body"
            >
              <div className="overflow-hidden rounded-3xl">
                <StaticImage
                  src="../../images/0.0 Repeated Modules/RanchView Lifestyle/FAQs.jpg"
                  loading="lazy"
                  width={746}
                  className="w-full"
                />
              </div>
              <div className="pt-6">
                <h3 className="heading-four">FAQs</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
