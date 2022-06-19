// import BlogPostPreview from "./BlogPostPreview";
// import FaqPreview from "./FaqPreview";
// import Link from 'gatsby-plugin-transition-link';

import Banner from "./Banner";

import React from "react";

function FaqsList(props) {
  return (
    <>
     
    <Banner>
      <Banner.Header>Frequently Asked Questions</Banner.Header>

      {props.nodes &&
        props.nodes.map((node,index) => (
          <Banner.Entity key={index}>
          <Banner.Question>{node.question}</Banner.Question>
          <Banner.Text>{node.answer}</Banner.Text>
        </Banner.Entity>
        ))}
    </Banner>

      
      {/* {faqlist.nodes &&
        faqlist.nodes.map((faq) => (
          <div key={faq.id}>
            test list - {faq.question}
          </div>
        ))} */}


      {/* {props.browseMoreHref && (
        <div>
          <Link to={props.browseMoreHref}>
            Browse more
          </Link>
        </div>
      )} */}
    </>
  );
}

FaqsList.defaultProps = {
  title: "",
  nodes: [],
  // faqlist: [],
  browseMoreHref: "",
};

export default FaqsList;
