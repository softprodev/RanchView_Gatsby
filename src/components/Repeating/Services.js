import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Slider from "../Slider/SliderServices";

const Testimonial = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      assistedLiving: file(
        relativePath: {
          eq: "0.0 Repeated Modules/Services Slider/senior assisted living.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 688)
        }
      }
      alzheimersCare: file(
        relativePath: {
          eq: "0.0 Repeated Modules/Services Slider/alzheimers care.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 688)
        }
      }
      dementiaCare: file(
        relativePath: {
          eq: "0.0 Repeated Modules/Services Slider/dementia care.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 688)
        }
      }
      enrichingExperience: file(
        relativePath: {
          eq: "0.0 Repeated Modules/Services Slider/enriching experience.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 688)
        }
      }
      hospiceCare: file(
        relativePath: {
          eq: "0.0 Repeated Modules/Services Slider/hospice care.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 688)
        }
      }
      respiteCare: file(
        relativePath: {
          eq: "0.0 Repeated Modules/Services Slider/respite care.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 688)
        }
      }
    }
  `);

  const slides = [
    {
      image: data.assistedLiving.childImageSharp.gatsbyImageData,
      heading: "Assisted Living",
      text: "RanchView assisted living residents receive help and support that’s tailored to their needs.",
      link: "/assistedliving",
    },
    {
      image: data.alzheimersCare.childImageSharp.gatsbyImageData,
      heading: "Alzheimer’s Care",
      text: "Residents with Alzheimer’s disease receive personalized memory care that includes therapeutic activity programs.",
      link: "/alzheimerscare",
    },
    {
      image: data.dementiaCare.childImageSharp.gatsbyImageData,
      heading: "Dementia Care",
      text: "Our staff has specialized training in dementia care and is on-site 24/7 to ensure each resident’s safety.",
      link: "/dementiacare",
    },
    {
      image: data.enrichingExperience.childImageSharp.gatsbyImageData,
      heading: "Hospice Accommodations",
      text: "We have a hospice waiver that allows a terminally ill resident to stay with us, and we accommodate hospice services.",
      link: "/hospicecare",
    },
    {
      image: data.hospiceCare.childImageSharp.gatsbyImageData,
      heading: "Respite Care",
      text: "Caregivers need care too and that’s why we offer short-term relief that allows them to recharge.",
      link: "/respitecare",
    },
    {
      image: data.respiteCare.childImageSharp.gatsbyImageData,
      heading: "Enriching Experiences",
      text: "Life is meant to be lived, and we’re committed to ensuring our residents continue to live life to the fullest.",
      link: "/enrichingexperiences",
    },
  ];

  return (
    <section className={`pb-20 md:pb-32 ${className}`}>
      <div className="container">
        <header className="mb-10 max-w-3xl md:mb-12">
          <h2>Greater San Diego Caregivers</h2>
          <p>
            At RanchView, residents receive compassionate, individualized care
            focusing on their physical well-being and the social and spiritual
            facets of their lives. Our services include:
          </p>
        </header>

        <Slider slides={slides} />
      </div>
    </section>
  );
};

export default Testimonial;
