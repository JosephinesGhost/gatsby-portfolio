import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Img from 'gatsby-image'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 12rem auto;
` 

const Title = styled.h1`
  flex: 0 1 1;
  font-family: serifa, serif;
  font-weight: 400;
  display: inline-block;
`

const Text = styled.div`
  flex: 0 1 1;
  font-family: serifa, serif;
  font-weight: 300;
`

const StyledImg = styled(Img)`
  flex: 1 50%;
  border-radius: 7px;
  margin-bottom: 1rem;
`

const Content = styled.div`
  flex: 1 50%;
  margin: 0 3rem 0 0;
` 

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Wrapper>
      <Content>
        <Title>{post.frontmatter.title}</Title>
        <Text dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
          <StyledImg fluid={post.frontmatter.image.childImageSharp.fluid} />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
       }
      }
    }
  }
`