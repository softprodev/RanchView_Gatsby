import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import ButtonContactSolid from "../../components/Button/ButtonContactSolid";


const ServiceSection1 = ({ headingLevel, className, sectionTitle, sectionDesc, contents, defaultImageUrl}) => {

  return (
    <>
      <section className={`${className || "mb-20 md:mb-32 bg-[#F0F6F7]"}`}>
        <div className="container">
          <div className="grid items-center gap-y-10 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 py-5">
            <div>
              <h1>
                  {sectionTitle}
              </h1>
              <p>
                  {sectionDesc}
              </p>
              <ButtonContactSolid modal="modal-contact" altStyle={1} text="Contact" />
            </div>
            <div>
              {/* <StaticImage
                src="../../images/2.0 Service Pages/assisted-living-hero.jpg"
                alt="Top Alzheimer’s & Dementia Care Serving Encinitas & North County, CA"
                width={560}
                loading="eager"
                placeholder="none"
              /> */}
                {contents.bgimage && contents.bgimage.asset ? (
                    <div className="my-5 overflow-hidden rounded-xl">
                    <GatsbyImage
                        image={contents.bgimage.asset.gatsbyImageData}
                        loading="lazy"
                        width={560}
                        // className="w-full scale-100 transform blur-none filter transition-all duration-500 ease-linear md:group-hover:scale-105"
                    />
                    </div>
                ): (
                  
                  <>
                  </>
                    // <StaticImage
                    //     src={defaultImageUrl}
                    //     alt="Service Background"
                    //     width={560}
                    //     loading="eager"
                    //     placeholder="none"
                    // />

                )
                }
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection1;
