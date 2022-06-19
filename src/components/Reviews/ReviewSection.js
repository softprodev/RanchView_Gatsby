import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import ButtonContactSolid from "../../components/Button/ButtonContactSolid";


const ReviewSection = ({ headingLevel, className, sectionTitle, sectionDesc}) => {

  return (
    <>
          <div className="relative w-full pt-[25%] pt-10" >

      {/* <section className="relative mb-20 pt-10 pb-56 md:mb-32 md:pt-28"> */}
        <div className="absolute bottom-0 left-0 hidden h-full w-full md:block">
          <StaticImage
            src="../../images/reviews/review_bg.png"
            alt="The Ranch View Lifestyle"
            loading="eager"
            placeholder="none"
            layout="constrained"
            className="h-full"
            imgClassName="object-top"
          />
        </div>
        <div className="absolute bottom-0 left-0 h-full w-full md:hidden">
          <StaticImage
            src="../../images/reviews/review_bg.png"
            alt="The Ranch View Lifestyle"
            loading="eager"
            placeholder="none"
            className="h-full w-full"
            imgClassName="object-top"
          />
        </div>
        
        <div className="container relative top-[-90px] md:top-[-150px] lg:top-[-240px] xl:top-[-300px]">
            <header className="mx-auto mb-14 text-center md:mb-20 md:max-w-[720px]">
              <p className="font-heading text-mobile-6xl font-bold text-white lg:mb-5 lg:text-6xl">
              {sectionTitle}
              </p>
              <p className="font-light text-white md:mb-4 lg:text-[1.325rem] lg:leading-[1.85rem]">
                  {sectionDesc}
              </p>
              <ButtonContactSolid modal="modal-contact" altStyle={1} text="Leave a Review" />
            </header>
        </div>
      {/* </section> */}
      </div>
    </>
  );
};

export default ReviewSection;
