import React, { Component } from 'react';
import Helmet from 'react-helmet';

const Template = ({data}) => {
  const {markdownRemark: post} = data;

  return ([
    <h1 key="1">{post.frontmatter.title}</h1>,
    <div key="2" dangerouslySetInnerHTML={{__html: post.html}} />
  ]);
};

export default Template;

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: { eq: $path} }) {
      html
      frontmatter {
        path,
        title
      }
    }
  }
`