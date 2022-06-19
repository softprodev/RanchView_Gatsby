import React from "react";
import { graphql } from "gatsby";
import Masonry from "react-masonry-component";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ReviewCards from "../components/Reviews/ReviewCards";
import CallToAction from "../components/Repeating/CTA";
import ReviewSection from "../components/Reviews/ReviewSection";

const Page = ({ data }) => {
  const StyledReviews = styled.div`
    .masonry-grid {
      ${tw`-mb-8`}
      @media (min-width: 768px) {
        ${tw`-mx-3 -mb-10`}
      }
      @media (min-width: 1024px) {
        ${tw`-mx-5 -mb-12`}
      }
    }
    .masonry-item {
      @media (min-width: 768px) {
        width: calc(50% - 1.5rem);
      }
      @media (min-width: 1024px) {
        width: calc(50% - 2.5rem);
      }
    }
  `;

  const masonryOptions = {
    itemSelector: ".masonry-item",
    horizontalOrder: true,
  };

  return (
    <Layout siteSettings={data.siteSettings} contactInfo={data.contactInfo}>
      <SearchEngineOptimization
        title=""
        description=""
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <ReviewSection  sectionTitle="Your Words Mean So Much To Us"
         sectionDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
         />
      <section className="mb-5 pt-16 md:mb-12 md:pt-20">
        <div className="container">
          {/* <header className="mx-auto mb-14 text-center md:mb-20 md:max-w-[640px]">
            <h1>Client Testimonials</h1>
            <p>See the Proven Results of Our Elite Coaching Program</p>
          </header> */}

          <StyledReviews>
            <Masonry className="masonry-grid" options={masonryOptions}>
              <ReviewCards />
            </Masonry>
          </StyledReviews>
        </div>
      </section>

      <CallToAction phonenumber={data.contactInfo.phonenumber} />
    </Layout>
  );
};

export const query = graphql`
  {
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
  }
`;

export default Page;
