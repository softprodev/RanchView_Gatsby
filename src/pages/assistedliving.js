import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import GraphQLErrorList from "../components/Blog/graphql-error-list";

import CallToAction from "../components/Repeating/CTA";
import ServiceSection1 from "../components/Service/ServiceSection1";
import ServiceSection2 from "../components/Service/ServiceSection2";
import RecentPosts from "../components/Repeating/RecentPosts";
import Testimonials from "../components/Repeating/Testimonials";
import WhyUs from "../components/Repeating/WhyUs";
import RanchViewLifestyle from "../components/Repeating/RanchViewLifestyle";

const AssistedLivingPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout siteSettings={data.siteSettings} contactInfo={data.contactInfo}>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }


  return (
    <Layout siteSettings={data.siteSettings} contactInfo={data.contactInfo}>
      <SearchEngineOptimization
        title=""
        description=""
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <ServiceSection1 sectionTitle={data.sanityAssistedliving.title}
         sectionDesc={data.sanityAssistedliving.description}
         contents={data.sanityAssistedliving}
         defaultImageUrl="../../images/2.0 Service Pages/dimentia-care-hero.jpg"
        />
      <ServiceSection2 title1={data.sanityAssistedliving.title1} description1={data.sanityAssistedliving.description1}
          title2={data.sanityAssistedliving.title2} description2={data.sanityAssistedliving.description2}
          title3={data.sanityAssistedliving.title3} description3={data.sanityAssistedliving.description3}
          sectionNumber={0}
        />
      <RanchViewLifestyle hide={4} />
      <WhyUs />
      <Testimonials /> 
      <RecentPosts /> 
      <CallToAction phonenumber={data.contactInfo.phonenumber} />
    </Layout>
  );
};

export const query = graphql`
  {

    contactInfo : sanityContactinfo {
      title
      description
      phonenumber
      email
      address
      license
      bookingurl
      titleofquestionnaire
      questions
    }
    siteSettings : sanitySiteSettings {
      title
      description
      author
      headerlogo {
        asset {
          gatsbyImageData
        }
      }
      footerlogo {
        asset {
          gatsbyImageData
        }
      }
      facebookurl
      twitterurl
      privacypolicy
    }


    sanityAssistedliving {
      title
      description
      bgimage {
        asset {
          gatsbyImageData
        }
      }
      mobilebgimage {
        asset {
          gatsbyImageData
        }
      }
      title1
      description1
      title2
      description2
      title3
      description3
    }
  }
`;


export default AssistedLivingPage;
