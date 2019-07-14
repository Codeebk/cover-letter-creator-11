import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, BlogList } from 'components';
import { Layout } from 'layouts';

const Blog = ({ data }) => {
  const { edges } = data.allMongodbCoverlettercreatorCoverletters;
  return (
    <Layout>
      <Helmet title={'Blog Page'} />
      <Header title="Blog Page">Gatsby Tutorial Starter</Header>
      {edges.map(({ node }) => (
        <BlogList
          key={node.id}
          // cover={node.frontmatter.cover.childImageSharp.fluid}
          // path={node.frontmatter.path}
          title={node.firstname}
          // date={node.frontmatter.date}
          // tags={node.frontmatter.tags}
          excerpt={node.skillone}
        />
      ))}
    </Layout>
  );
};

export default Blog;

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
query {
  allMongodbCoverlettercreatorCoverletters{
   edges {
     node {
       firstname
       lastname
       targetjobtitle
       targetcompany
       skillone
       skilltwo
       skillthree
     }
   }
 }
}
`;
