import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";

import GraphQLErrorList from "../Blog/graphql-error-list";
import {
  mapEdgesToNodes,
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
} from "../../lib/helpers";

const RecentPosts = ({ node, className }) => {
  const data = useStaticQuery(graphql`
    {
      posts: allSanityBlogs(
        sort: { fields: [publishedAt], order: DESC }
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
        limit: 3
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
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const errors = node;

  if (errors) {
    return <GraphQLErrorList errors={errors} />;
  }

  const blogNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <>
      <section className={` ${className || "pb-20 md:pb-32"}`}>
        <div className="container pt-10">
          <div className="grid gap-y-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-8">
            {blogNodes.length > 0 &&
              blogNodes.map((node) => (
                <div key={node.id}>
                  <Link
                    to={`/${node.slug.current}/`}
                    className="group block font-normal text-typography-body no-underline hover:text-typography-body"
                  >
                    {node.featuredImage && node.featuredImage.asset && (
                      <div className="mb-5 overflow-hidden rounded-xl">
                        <GatsbyImage
                          image={node.featuredImage.asset.gatsbyImageData}
                          loading="lazy"
                          className="w-full scale-100 transform blur-none filter transition-all duration-500 ease-linear md:group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="font-heading text-xl text-primary-900">
                      {node.title}
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentPosts;
