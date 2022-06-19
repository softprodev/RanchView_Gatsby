import React from "react";



import SliderDetailServices from "../../components/Slider/SliderDetailServices";

import ButtonContactSolid from "../../components/Button/ButtonContactSolid";


const slides = [
  {
    // image: data.assistedLiving.childImageSharp.gatsbyImageData,
    heading: "Assisted Living",
    text: "RanchView assisted living residents receive help and support that’s tailored to their needs.",
    link: "/assistedliving",
  },
  {
    // image: data.alzheimersCare.childImageSharp.gatsbyImageData,
    heading: "Alzheimer’s Care",
    text: "Residents with Alzheimer’s disease receive personalized memory care that includes therapeutic activity programs.",
    link: "/alzheimerscare",
  },
  {
    // image: data.dementiaCare.childImageSharp.gatsbyImageData,
    heading: "Dementia Care",
    text: "Our staff has specialized training in dementia care and is on-site 24/7 to ensure each resident’s safety.",
    link: "/dementiacare",
  },
  {
    // image: data.enrichingExperience.childImageSharp.gatsbyImageData,
    heading: "Hospice Care",
    text: "We have a hospice waiver that allows a terminally ill resident to stay with us, and we accommodate hospice services.",
    link: "/hospicecare",
  },
  {
    // image: data.hospiceCare.childImageSharp.gatsbyImageData,
    heading: "Respite Care",
    text: "Caregivers need care too and that’s why we offer short-term relief that allows them to recharge.",
    link: "/respitecare",
  },
  {
    // image: data.respiteCare.childImageSharp.gatsbyImageData,
    heading: "Enriching Experiences",
    text: "Life is meant to be lived, and we’re committed to ensuring our residents continue to live life to the fullest.",
    link: "/enrichingexperiences",
  },
];

const ServiceSection2 = ({ headingLevel, className, 
  title1,description1,
  title2, description2,
  title3, description3,
  sectionNumber
  }) => {


  return (
    <>
      <section className={` ${className || "mb-10 md:mb-12"}`}>
        <div className="container pt-10">
          <div class="md:flex ...">
            <div class="md:w-2/3 pl-5 pr-5 ... ">
              <div className="grid items-center gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20">
                    <div>
                      <h2>
                       {title1}
                      </h2>
                      <p>
                        {description1}
                      </p>
                    </div>                  
                </div>
                <div className="grid items-center gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20">
                  <div>
                      <h3>
                       {title2}
                      </h3>
                      <p>
                        {description2}
                      </p>
                  </div>                  
                </div>                
                <div className="grid items-center gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20">
                    <div>
                      <h3>
                       {title3}
                      </h3>
                      <p>
                        {description3}
                      </p>
                      <ButtonContactSolid modal="modal-contact" altStyle={1} text="Contact" />
                    </div>                  
                </div>
            </div>
            <div class="md:w-1/3 ... ">
                <div className="grid items-center mx-5 my-5 rounded-3xl p-10 gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20 bg-[#F0F6F7]">
                    <div>
                      <h3>
                      Programs
                      </h3>
                      <div>
                        <SliderDetailServices slides={slides} sectionNumber={sectionNumber} />
                      </div>
                      <ButtonContactSolid modal="modal-contact" altStyle={1} text="Book a Tour" />
                    </div>                  
                </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default ServiceSection2;
