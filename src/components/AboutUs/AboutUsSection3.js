import React from "react";

import { StaticImage } from "gatsby-plugin-image";



const AboutUsSection3 = ({ headingLevel, className, sectionTitle, sectionDesc}) => {

  return (
    <>
      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid items-center gap-y-10 md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
            <div>
              <h1>
                  {sectionTitle}
              </h1>
              <p>
                  {sectionDesc}
              </p>
            </div>
            <div>
              <StaticImage
                src="../../images/4.0 About/2.0 Meet Jeff Heading.jpg"
                alt="Top Alzheimer’s & Dementia Care Serving Encinitas & North County, CA"
                width={560}
                loading="eager"
                placeholder="none"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection3;
