import React, { Component } from "react";
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
    margin: 0 auto;
    margin-bottom: 6rem;
    overflow: visible;
` 

const Title = styled.h5`
    margin-bottom: 2rem;
    text-align: center;
`

const Inner = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    /* padding: 3rem; */

    @media (max-width: 1024px) {
        grid-template-columns:  1fr 1fr;
        grid-row-gap: 1rem;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-row-gap: 1rem;
    }
`

const Box = styled.div`
    align-items: center;
`

const Thumb = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const StyledImg = styled(Img)`
    border-radius: 8px;
    opacity: 1;
	-webkit-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    
        :hover {
            opacity: .7;
        }
`

export class Gallery extends Component {

      render(){
        return (
            <Wrapper>
            <Title>
                Works
            </Title>
                <Inner>
                {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
                    <Box key={node.id} className='box' >
                        <Thumb to={node.fields.slug}>
                            <StyledImg fluid={node.frontmatter.image.childImageSharp.fluid} />
                        </Thumb> 
                    </Box>
                ))}
                </Inner>
            </Wrapper>
        )
    }
}

export default props => (
      
    <StaticQuery
    query={graphql`
      query {
          allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
              totalCount
              edges {
              node {
                  id
                  frontmatter {
                  title
                  date(formatString: "DD MMMM, YYYY")
                  image {
                  childImageSharp {
                      fluid(maxWidth: 800, maxHeight: 800) {
                      ...GatsbyImageSharpFluid_noBase64
                        aspectRatio
                      }
                  }
              }
                  }
                  fields {
                  slug
                  }
                  excerpt
              }
              }
          }
          }
    `}
    render={data => <Gallery data={data} {...props} />}
    />
)
