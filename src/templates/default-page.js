import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import HeadData from "../components/HeadData.js";
import SiteMetaData from "../components/SiteMetadata.js";

export const DefaultPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section default-page">
      <div className="container">
        <div className="content">
          <h1 className="title">{title}</h1>
          <PageContent content={content} />
        </div>
      </div>
    </section>
  );
};

DefaultPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const DefaultPage = ({ data }) => {
  const { title: siteName } = SiteMetaData();
  const { markdownRemark: post } = data;

  return (
    <Layout title={post.frontmatter.title}>
      <HeadData title={`${post.frontmatter.seoTitle} - ${siteName}`} description={post.frontmatter.seoDescription} schema={post.frontmatter.schema} />
      <DefaultPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
    </Layout>
  );
};

DefaultPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DefaultPage;

export const defaultPageQuery = graphql`
  query DefaultPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        seoTitle
        seoDescription
        schema
      }
    }
  }
`;
