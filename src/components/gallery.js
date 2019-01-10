import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  margin-bottom: 1.45rem;
` 

const Title = styled.h3`
  display: inline-block;
  border-bottom: 1px solid;
`

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  margin-top: 3rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const StyledImg = styled(Img)`
  margin-bottom: 1rem;
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
                        <StyledImg fluid={node.frontmatter.image.childImageSharp.fluid}/>
                        <h3>
                        {node.frontmatter.title}{" "}
                        <span>
                            — {node.frontmatter.date}
                        </span>
                        </h3>
                        <p>{node.excerpt}</p>
                    </StyledLink> 
                </div>
            ))}
            </Inner>
        </Wrapper>
      )}
    />
  )

export default Gallery

