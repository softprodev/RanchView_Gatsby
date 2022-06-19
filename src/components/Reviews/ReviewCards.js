import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { mapEdgesToNodes } from "../../lib/helpers";

// const image = getImage(data.blogPost.avatar)


const ReviewCards = () => {
  const data = useStaticQuery(graphql`
    {
      yelp: file(relativePath: { eq: "reviews/Yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 74)
        }
      }
      google: file(relativePath: { eq: "reviews/Google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 85)
        }
      }
      facebook: file(relativePath: { eq: "reviews/Facebook.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 104)
        }
      }
      defaultProfilePicture: file(
        relativePath: { eq: "/reviews/default-profile-picture.svg" }
      ) {
        publicURL
      }
      fivestars: file(relativePath: { eq: "reviews/five-stars.svg" }) {
        publicURL
      }
      reviews: allSanityTestimonials(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            name
            profilePicture {
              asset {
                gatsbyImageData(layout: CONSTRAINED, width: 40)
              }
            }
            review
            platform
          }
        }
      }
    }
  `);

  const reviewNodes = (data || {}).reviews ? mapEdgesToNodes(data.reviews) : [];

  return (
    <>
      {reviewNodes.map((review, i) => {
        return (
          <div
            className="masonry-item mb-6 w-full break-inside-avoid rounded-lg border border-gray-200 bg-white py-8 px-6 md:mx-3 md:mb-10 md:p-8 lg:mx-5 lg:mb-10"
            key={i}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {review.profilePicture && review.profilePicture.asset ? (
                  <div className="mb-2 inline-flex justify-center rounded-full border border-gray-300">
                    <GatsbyImage
                      image={review.profilePicture.asset.gatsbyImageData}
                      alt={`${review.name} profile headshot`}
                      loading="lazy"
                      width={40}
                      height={40}
                      className="z-0 rounded-full"
                    />
                  </div>
                ) : (
                  <>
                  </>
                  // <StaticImage
                  //   src={data.defaultProfilePicture.publicURL}
                  //   alt="The Ranch View Lifestyle"
                  //   loading="eager"
                  //   placeholder="none"
                  //   layout="constrained"
                  //   className="h-full"
                  //   imgClassName="object-top"
                  // />


                  // <img
                  //   src={data.defaultProfilePicture.publicURL}
                  //   // src="../images/reviews/Avatar.svg"
                  //   width="40"
                  //   alt="Default profile"
                  // />

                )}

                <div>
                  <span className="block font-bold text-primary-900">
                    {review.name}
                  </span>
                </div>
              </div>

              {review.platform === "Google" && (
                <GatsbyImage
                  image={data.google.childImageSharp.gatsbyImageData}
                  loading="lazy"
                />
              )}

              {review.platform === "Yelp" && (
                <GatsbyImage
                  image={data.yelp.childImageSharp.gatsbyImageData}
                  loading="lazy"
                />
              )}

              {review.platform === "Facebook" && (
                <GatsbyImage
                  image={data.facebook.childImageSharp.gatsbyImageData}
                  loading="lazy"
                />
              )}
            </div>
            <blockquote>
              <q className="mb-0 block font-normal before:hidden">
                {review.review}
              </q>
            </blockquote>
          </div>
        );
      })}
    </>
  );
};

export default ReviewCards;
