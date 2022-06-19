import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import ButtonSolid from "../../components/Button/ButtonSolid";



const NeighborhoodSection1 = ({ headingLevel, className, sectionTitle, sectionDesc}) => {

  return (
    <>
      <section className="relative pt-10 pb-56 md:pt-28">
        <div className="absolute bottom-0 left-0 hidden h-full w-full md:block">
          <StaticImage
            src="../../images/3.0 Neighborhood/Neighborhood.jpg"
            alt="The Ranch View Lifestyle"
            loading="eager"
            placeholder="none"
            className="h-full"
            imgClassName="object-top"
          />
        </div>

        <div className="absolute bottom-0 left-0 h-full w-full md:hidden">
          <StaticImage
            src="../../images/3.0 Neighborhood/1.0 Neighborhood-mobile.jpg"
            alt="The Ranch View Lifestyle"
            loading="eager"
            placeholder="none"
            className="h-full w-full"
            imgClassName="object-top"
          />
        </div>

        <div className="container relative">
          <div className="text-center md:max-w-[588px] md:text-left">
            <p className="font-heading text-mobile-6xl font-bold text-white lg:mb-5 lg:text-6xl">
            {sectionTitle}{" "}
              
              {/* {data.allSanityServices.nodes &&
                data.allSanityServices.nodes.map(node => (
                  <li key={node.title}>
                    {node.title}
                  </li>
              ))} */}
            </p>
            <p className="font-light text-white md:mb-4 lg:text-[1.325rem] lg:leading-[1.85rem]">
                {sectionDesc}
            </p>
            <ButtonSolid modal="modal-contact" altStyle={2} text="Contact Us" />
          </div>
          {/* <div>
            <StaticImage
              // src="../images/1.0 Homepage/2.0 intro.jpg"
              src="../images/1.0 Homepage/Hero Joe.png"
              alt="Ranchview"
              loading="eager"
              placeholder="none"
            />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default NeighborhoodSection1;
