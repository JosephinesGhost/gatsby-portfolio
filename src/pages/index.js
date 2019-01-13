import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Gallery from '../components/gallery'
import SEO from '../components/seo'

const Wrapper = styled.div`
  margin: 0;
` 

const Intro = styled.h2`
  margin-bottom: 6rem;
  text-align: center;
` 

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Wrapper>
          <Intro>{data.site.siteMetadata.description}</Intro>
          <Gallery />
        </Wrapper>
    </Layout>
)
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default IndexPage
