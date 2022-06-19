import BlogPostPreview from "./BlogPostPreview";
// import Link from 'gatsby-plugin-transition-link';
import React from "react";

function BlogPostGrid(props) {
  return (
    <div className="grid gap-x-10 gap-y-8 md:grid-cols-3 md:gap-y-16">
      {props.title}
      {props.nodes &&
        props.nodes.map((node) => (
          <div key={node.id}>
            <BlogPostPreview {...node} isInList />
          </div>
        ))}
      {/* {props.browseMoreHref && (
        <div>
          <Link to={props.browseMoreHref}>
            Browse more
          </Link>
        </div>
      )} */}
    </div>
  );
}

BlogPostGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostGrid;
