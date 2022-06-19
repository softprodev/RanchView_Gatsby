import React from "react";

import { StaticImage } from "gatsby-plugin-image";


const AboutUsSection2 = ({ headingLevel, className, sectionTitle, sectionDesc}) => {

  return (
    <>
      <section className="relative bg-[#08353D] min-h-[300px] mb-20">
        <div className="text-center py-9 pt-[50px] px-30">
            <p className="font-heading text-center text-mobile-6xl font-bold text-white lg:mb-5 lg:text-6xl">
              {sectionTitle}             
            </p>
            <div class="table px-30 ...">
              <p class="text-center px-30 align-middle table-cell font-light text-center text-white md:mb-4">
                  {sectionDesc}
              </p> 
            </div>  
        </div>

        <div className="absolute top-1 left-0">
            <StaticImage
              src="../../images/4.0 About/missiontopleft.png"
              alt="Mission Heading Top Left"
              loading="eager"
              placeholder="none"
              className="h-full w-full"
              imgClassName="object-top"
            />
        </div>
        <div className="absolute top-1 right-0">
            <StaticImage
              src="../../images/4.0 About/missiontopright.png"
              alt="Mission Heading Top Right"
              loading="eager"
              placeholder="none"
              className="h-full w-full"
              imgClassName="object-top"
            />
        </div>
        <div className="absolute bottom-1 right-0">
            <StaticImage
              src="../../images/4.0 About/missionbottomright.png"
              alt="Mission Heading Bottom Right"
              loading="eager"
              placeholder="none"
              className="h-full w-full"
              imgClassName="object-top"
            />
        </div>
        <div className="absolute bottom-1 left-0">
            <StaticImage
              src="../../images/4.0 About/missionbottomleft.png"
              alt="Mission Heading Bottom Left"
              loading="eager"
              placeholder="none"
              className="h-full w-full"
              imgClassName="object-top"
            />
        </div>
      </section>
    </>
  );
};

export default AboutUsSection2;
