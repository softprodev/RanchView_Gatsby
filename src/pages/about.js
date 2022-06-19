import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import GraphQLErrorList from "../components/Blog/graphql-error-list";

import CallToAction from "../components/Repeating/CTA";
import RanchViewLifestyle from "../components/Repeating/RanchViewLifestyle";
import AboutUsSection1 from "../components/AboutUs/AboutUsSection1";
import AboutUsSection2 from "../components/AboutUs/AboutUsSection2";
import AboutUsSection3 from "../components/AboutUs/AboutUsSection3";
import AboutUsSection4 from "../components/AboutUs/AboutUsSection4";
import WhyUs from "../components/Repeating/WhyUs";


const Page = (props) => {
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
      <AboutUsSection1 sectionTitle={data.sanityAboutus.title}
         sectionDesc={data.sanityAboutus.description}
         />
      <AboutUsSection2 sectionTitle={data.sanityAboutus.headingtitle1}
         sectionDesc={data.sanityAboutus.headingdescription1}
         />
      <WhyUs />
      <AboutUsSection3 sectionTitle={data.sanityAboutus.headingtitle2}
         sectionDesc={data.sanityAboutus.headingdescription2}
         />
      <AboutUsSection4 sectionTitle={data.sanityAboutus.headingtitle3}
         sectionDesc={data.sanityAboutus.headingdescription3}
         />
      <RanchViewLifestyle hide={4} />
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


    sanityAboutus {
      title
      description
      headingtitle1
      headingdescription1
      headingtitle2
      headingdescription2
      headingtitle3
      headingdescription3
    }
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Facebook.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Twitter.jpg" }
    ) {
      publicURL
    }
    posts: allSanityBlogs(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          featuredImage {
            asset {
              gatsbyImageData
            }
          }
          categories {
            _id
            title
          }
          title
          slug {
            current
          }
          _rawBody(resolveReferences: { maxDepth: 5 })
        }
      }
    }
  }
`;

export default Page;
