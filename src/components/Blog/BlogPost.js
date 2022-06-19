import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { differenceInDays, formatDistance, format } from "date-fns";
import styled from "@emotion/styled";
import tw from "twin.macro";
// import Link from "gatsby-plugin-transition-link";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../../lib/helpers";
import PortableText from "./portableText";
// import Newsletter from "../Form/Newsletter";
// import BlogPostPreview from "./BlogPostPreview";
import CallToAction from "../Repeating/CTA";
import RecentPosts from "../Repeating/RecentPosts";

const StyledContent = styled.div`
  p,
  span,
  li {
    ${tw`md:text-xl`}
  }
  ul {
    ${tw`list-disc pl-7 mb-6 flex flex-col space-y-0.5`}
  }
  ol {
    ${tw`list-decimal pl-7 mb-6 flex flex-col space-y-0.5`}
  }
  strong {
    ${tw`font-bold`}
  }
  em {
    ${tw`italic`}
  }
`;

function BlogPost(props) {
  const {
    siteMetadata,
    // next,
    // prev,
    slug,
    _rawBody,
    author,
    categories,
    title,
    featuredImage,
    publishedAt,
  } = props;

  const data = useStaticQuery(graphql`
    {
      sanityContactinfo {
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
  `);

  const currentPostCategory =
    categories.length > 0 &&
    categories.slice(0, 1).map((category) => category.title);

  let postNodes = [];

  categories.length > 0
    ? (postNodes = (data || {}).posts
        ? mapEdgesToNodes(data.posts)
            .filter(filterOutDocsWithoutSlugs)
            .filter(filterOutDocsPublishedInTheFuture)
            .filter((items) =>
              items.categories.find(
                (item) => item.title === currentPostCategory
              )
            )
        : [])
    : (postNodes = (data || {}).posts
        ? mapEdgesToNodes(data.posts)
            .filter(filterOutDocsWithoutSlugs)
            .filter(filterOutDocsPublishedInTheFuture)
        : []);

  return (
    <>
      <section className="bg-white py-20">
      {/* <section className="bg-primary-900 py-20"> */}
        <div className="container">
          <div className="mx-auto max-w-[720px]">
            <header className="mb-8 md:mb-10">
              <h1 className="text-black">{title}</h1>
            </header>

            <div className="flex items-center justify-between space-y-8">
              <div>
                {/* {publishedAt && (
                  <div className="text-sm font-normal text-black">
                    {differenceInDays(new Date(publishedAt), new Date()) > 3
                      ? formatDistance(new Date(publishedAt), new Date())
                      : format(new Date(publishedAt), "MMMM d, yyyy")}
                  </div>
                )} */}

                <div className="flex items-center space-x-2">
                  {author && author.image && (
                    <GatsbyImage
                      image={author.image.asset.gatsbyImageData}
                      loading="lazy"
                      className="z-0 h-12 w-12 rounded-full"
                    />
                  )}

                  <div>
                    {author && (
                      <div className="text-primary-200">
                        By <b>{author.name}</b>
                      </div>
                    )}

                    {publishedAt && (
                      <div className="text-sm font-normal text-black">
                        {differenceInDays(new Date(publishedAt), new Date()) > 3
                          ? formatDistance(new Date(publishedAt), new Date())
                          : format(new Date(publishedAt), "MMMM d, yyyy")}
                      </div>
                    )}
                    
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div className="hidden items-center space-x-7 md:flex">
                  <FacebookShareButton
                    url={`${siteMetadata.siteUrl}/${slug.current}/`}
                    quote={title}
                    className="no-underline"
                  >
                    <i className="fab fa-facebook-f !flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-primary-500 text-primary-900 transition-colors duration-300 ease-linear hover:bg-white hover:text-primary-900"></i>
                  </FacebookShareButton>

                  <LinkedinShareButton
                    url={`${siteMetadata.siteUrl}/${slug.current}/`}
                    title={title}
                    className="no-underline"
                  >
                    <i className="fab fa-linkedin-in !flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-primary-500 text-primary-900 transition-colors duration-300 ease-linear hover:bg-white hover:text-primary-900"></i>
                  </LinkedinShareButton>

                  <TwitterShareButton
                    url={`${siteMetadata.siteUrl}/${slug.current}/`}
                    title={title}
                    className="no-underline"
                  >
                    <i className="fab fa-twitter !flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-primary-500 text-primary-900 transition-colors duration-300 ease-linear hover:bg-white hover:text-primary-900"></i>
                  </TwitterShareButton>
                  {/* <TwitterShareButton
                    url={`${siteMetadata.siteUrl}/${slug.current}/`}
                    title={title}
                    className="no-underline"
                  >
                    <i className="fab fa-solid fa-link-simple !flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-primary-500 text-primary-900 transition-colors duration-300 ease-linear hover:bg-white hover:text-primary-900"></i>
                  </TwitterShareButton> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="mb-20 pt-12 md:mb-32 md:pt-20">
        <div className="container">
          <div className="mx-auto max-w-[720px]">
            {featuredImage && featuredImage.asset && (
            <div className="mb-12 md:mb-20">
              <GatsbyImage image={props.featuredImage.asset.gatsbyImageData} loading="lazy" />
            </div>
          )}

            <StyledContent>
              {_rawBody && <PortableText blocks={_rawBody} />}
            </StyledContent>

            <div className="mb-24 mt-14 md:mb-36 md:mt-16">
              <div className="mb-2.5 text-center text-sm font-bold uppercase tracking-wider text-primary-900">
                Share
              </div>
              <div className="flex items-center justify-center space-x-6">
                <FacebookShareButton
                  url={`${siteMetadata.siteUrl}/${slug.current}/`}
                  quote={title}
                  className="no-underline"
                >
                  <i className="fab fa-facebook-f bg-primary-200 !flex h-10 w-10 items-center justify-center rounded-full text-primary-500 text-primary-900 transition-colors duration-300 ease-linear hover:bg-primary-900 hover:text-white"></i>
                </FacebookShareButton>

                <LinkedinShareButton
                  url={`${siteMetadata.siteUrl}/${slug.current}/`}
                  title={title}
                  className="no-underline"
                >
                  <i className="fab fa-linkedin-in bg-primary-200 !flex h-10 w-10 items-center justify-center rounded-full text-primary-500 text-primary-900 transition-colors duration-300 ease-linear hover:bg-primary-900 hover:text-white"></i>
                </LinkedinShareButton>

                <TwitterShareButton
                  url={`${siteMetadata.siteUrl}/${slug.current}/`}
                  title={title}
                  className="no-underline"
                >
                  <i className="fab fa-twitter bg-primary-200 !flex h-10 w-10 items-center justify-center rounded-full text-primary-500 text-primary-900 transition-colors duration-300 ease-linear hover:bg-primary-900 hover:text-white"></i>
                </TwitterShareButton>
              </div>
            </div>

            {/* <div className="mt-16 flex justify-between">
              {prev ? (
                <Link
                  
                  to={`/${prev.slug.current}/`}
                  className="group inline-flex items-center justify-center space-x-2.5 font-bold text-primary-500 hover:text-primary-500"
                >
                  <i className="far fa-arrow-left relative right-0 text-xl transition-all duration-300 ease-linear group-hover:right-1.5"></i>{" "}
                  <span>Previous</span>
                </Link>
              ) : (
                <div></div>
              )}
              {next ? (
                <Link
                  
                  to={`/${next.slug.current}/`}
                  className="group inline-flex items-center justify-center space-x-2.5 font-bold text-primary-500 hover:text-primary-500"
                >
                  <span>Next</span>
                  <i className="far fa-arrow-right relative left-0 text-xl transition-all duration-300 ease-linear group-hover:left-1.5"></i>
                </Link>
              ) : (
                <div></div>
              )}
            </div> */}
          </div>
        </div>
      </article>

      {/* <section className="pb-20 md:pb-32">
        <div className="container">
          <div className="mb-8 flex items-center justify-between md:mb-10">
            <h2 className="mb-0">Recent Articles</h2>
            <ButtonSolid
              altStyle={3}
              href="/blog"
              text="Read All Articles"
              className="hidden md:inline-flex"
            />
          </div>

          {postNodes && postNodes.length > 0 && (
            <div className="mb-10 md:mb-0">
              {postNodes.slice(0, 2).map((node) => (
                <div key={node.id}>
                  <BlogPostPreview {...node} isInList />
                </div>
              ))}
            </div>
          )}

          <ButtonSolid
            altStyle={3}
            href="/blog"
            text="Read All Articles"
            className="md:hidden"
          />
        </div>
      </section> */}
      <RecentPosts />
      {/* <CallToAction/> */}
      <CallToAction phonenumber={data.sanityContactinfo.phonenumber} />
    </>
  );
}

export default BlogPost;
