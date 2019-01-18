import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Gallery from '../components/gallery'
import SEO from '../components/seo'

const Wrapper = styled.div`
  margin: 0;
`

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin:  auto;
  height: 50vh;
` 
const Title = styled.h1`
  font-family: tamarillo-jf;
  font-weight: 400;
`

const StyledLink = styled(Link)`
  color: #444;
  text-decoration: none;
`

const Desc = styled.h3`
  text-align: left;
  font-weight: 300;
  text-transform: uppercase;
` 

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Wrapper>
        <Intro>
          <Title>
            <StyledLink to="/">
              {data.site.siteMetadata.title}
            </StyledLink>
           </Title>
           <Desc>{data.site.siteMetadata.description}</Desc>
          </Intro>
          <Gallery />
        </Wrapper>
    </Layout>
)
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default IndexPage
