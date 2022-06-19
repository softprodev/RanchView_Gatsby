import React from "react";
import { graphql } from "gatsby";
import BlogPost from "../components/Blog/BlogPost";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityBlogs(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      featuredImage {
        asset {
          gatsbyImageData
          url
        }
      }
      title
      slug {
        current
      }
      seoTitle
      metaDescription
      _rawBody(resolveReferences: { maxDepth: 5 })
      author {
        name
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
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

const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  const site = data && data.site;
  return (
    <Layout siteSettings={data.siteSettings} contactInfo={data.contactInfo}>
      {errors && <SearchEngineOptimization title="GraphQL Error" />}
      {post && (
        <SearchEngineOptimization
          title={post.seoTitle}
          description={post.metaDescription}
          // openGraphImage={post.featuredImage.asset.url}
          // twitterOpenGraphImage={post.featuredImage.asset.url}
        />
      )}

      {errors && (
        <div className="container">
          <GraphQLErrorList errors={errors} />
        </div>
      )}

      {post && (
        <>
          <BlogPost {...post} {...site} />
        </>
      )}
    </Layout>
  );
};

export default BlogPostTemplate;
