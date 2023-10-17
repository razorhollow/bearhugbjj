import * as React from 'react';
import { css } from '@emotion/react';
import { Card } from './lib';
import { useStaticQuery, graphql } from 'gatsby';
import cardContent from '../data/cardContent';

const cardSectionStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 3rem;
`;

const CardSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativePath: { regex: "/^card-images/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(width: 350)
            }
          }
        }
      }
    }
  `);

  console.log(data.allFile.edges)

  return (
    <div css={cardSectionStyle}>
      {cardContent.map(card => {
        console.log(card.imgName)
        const edge = data.allFile.edges.find(
          edge => edge.node.relativePath === card.imgName
        );

        const image = edge ? edge.node.childImageSharp.gatsbyImageData : null;

        if (!image) {
          console.error(`No image found for ${card.imgName}`);
          return null; // this will prevent rendering of the Card for this item
        }

        return (
          <Card key={card.title} title={card.title} text={card.text} image={image} />
        );
      })}
    </div>
  );
};

export default CardSection;
