import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
    margin: auto;
` 

const Title = styled.h2`
    display: inline-block;
    margin-bottom: 1rem;
`

const Inner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 40px;
    
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-column-gap: 40px;
    }
`

const StyledLink = styled(Link)`
    font-family: brandon-grotesque, serif;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
`

const StyledImg = styled(Img)`
    border-radius: 7px;
    margin-bottom: 1rem;

    opacity: 1;
	-webkit-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    
        :hover {
            opacity: .7;
        }
`

const PostTitle = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;

`
const Date = styled.p`  
    font-size: 0.8rem;
    display: block;
    color: #777;
 
`


const Gallery = () => (
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
                        fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_noBase64
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
      render={data => (
        <Wrapper>
        <Title>
            Portfolio
        </Title>
            <Inner>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <StyledLink to={node.fields.slug}>
                        <StyledImg fluid={node.frontmatter.image.childImageSharp.fluid} />
                        <PostTitle>
                        {node.frontmatter.title}{" "}
                        </PostTitle>
                    </StyledLink> 
                    <Date>
                        {node.frontmatter.date}
                    </Date>
                    <p>{node.excerpt}</p>
                </div>
            ))}
            </Inner>
        </Wrapper>
      )}
    />
  )

export default Gallery

