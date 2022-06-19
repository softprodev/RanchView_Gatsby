import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import ButtonContactSolid from "../../components/Button/ButtonContactSolid";

const AboutUsSection4 = ({ headingLevel, className, sectionTitle, sectionDesc}) => {

  return (
    <>
      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid items-center gap-y-10 md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
            <div>
              <StaticImage
                src="../../images/4.0 About/3.0 Careers Heading.jpg"
                alt="Top Alzheimer’s & Dementia Care Serving Encinitas & North County, CA"
                width={560}
                loading="eager"
                placeholder="none"
              />
            </div>
            <div>
              <h1>
                  {sectionTitle}
              </h1>
              <p>
                  {sectionDesc}
              </p>
              <ButtonContactSolid modal="modal-contact" altStyle={1} text="Join the Team" />
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection4;
