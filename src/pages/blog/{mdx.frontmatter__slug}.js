import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage,getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import styled from '@emotion/styled'
import Seo from '../../components/seo'
import colors from '../../styles/colors'

const Title = styled.h1`
  color: ${colors.lightGray};
  text-transform: uppercase;
  font-weight: 100;
`

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  margin-left: 5vw;
  color: ${colors.lightGray}
`
const PhotoCred = styled.a`
  text-decoration: none;
  color: ${colors.primaryGreen}
`

const ImageWrapper = styled.div`
  height: 50vh;
  overflow: hidden;
  width: 100%;
`


const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <BlogContainer>
        <Title>{data.mdx.frontmatter.title}</Title>
        <ImageWrapper>
        <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        </ImageWrapper>
        <div>
          <p>Posted: {data.mdx.frontmatter.date}</p>
          <p>
            Photo Credit:{" "}
            <PhotoCred href={data.mdx.frontmatter.hero_image_credit_link} target='blank'>
              {data.mdx.frontmatter.hero_image_credit_text}
            </PhotoCred>
          </p>
          {children}
        </div>
      </BlogContainer>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost