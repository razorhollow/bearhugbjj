import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import { stripMarkdown } from '../../../utils/markdownUtils';
import colors from '../../styles/colors';

const cardStyle = css`
  display: flex;
  flex-direction: column;
  width: 300px; // adjust to desired width
  max-height: 400px; // adjust to desired height
  margin: 20px 0;
  border: none;
  border-radius: 16px;
  background: rgba(13, 15, 14, 0.5);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); ;
`;

const imageStyle = css`
  width: 100%;
  height: 130px; // adjust to about one-third of card height
  object-fit: cover;
`;

const titleStyle = css`
  margin: 15px 10px 10px 10px;
  font-size: 20px;
`;

const excerptStyle = css`
  flex-grow: 1;
  margin: 0 10px;
  overflow: hidden; // hide text that overflows the container
  color: ${colors.mediumGray};
  padding-bottom: 1.5rem;
`;

const footerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px; // adjust as needed
  padding: 0 10px;
  background-color: #f7f7f7; // adjust to a light background, or desired color
  color: ${colors.mediumGray}
`;

const cardSectionStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`


const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="News and Updates">
      <div css={cardSectionStyle} >
      {data.allMdx.nodes.map(node => {
        const image = getImage(node.frontmatter.hero_image);
        return (
          <Link 
            to={`/blog/${node.frontmatter.slug}`}
            key={node.id}
            css={{
              textDecoration: 'none',
              color: colors.lightGray
            }}
          >
            <article css={cardStyle}>
                <GatsbyImage image={image} alt={node.frontmatter.title} css={imageStyle} />
                <h2 css={titleStyle}>{node.frontmatter.title}</h2>
                <p css={excerptStyle}>{stripMarkdown(node.excerpt)}</p>
              <div css={footerStyle}>
                <span>{node.frontmatter.author}</span>
                <span>Posted: {node.frontmatter.date}</span>
              </div>
            </article>
          </Link>
        );
      })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MM/D/YYYY")
          title
          slug
          author
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 400, layout: CONSTRAINED)
            }
          }
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="News and Updates" />;

export default BlogPage;

