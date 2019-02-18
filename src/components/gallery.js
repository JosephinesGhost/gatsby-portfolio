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
    grid-template-columns: 1fr;
    grid-row-gap: 6rem;
     
    @media (max-width: 1048px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }

`

const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    align-items: center;

    ${Inner} &:nth-child(even) {
        grid-template-areas: 
        "right left";
    }

    ${Inner} &:nth-child(odd) {
        grid-template-areas: 
        "left right";
    }

`

const Thumb = styled(Link)`
    text-decoration: none;
    color: inherit;
    grid-area: left;

`

const Content = styled.div`
    text-decoration: none;
    grid-area: right;
    padding: 2rem;

`

const StyledLink = styled(Link)`
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

const PostTitle = styled.h6`
    margin-bottom: 0.5rem;

`
const Date = styled.p`  
    font-size: 0.8rem;
    display: block;
    color: #777;
 
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
                        <Content>
                            <StyledLink to={node.fields.slug}>
                                <PostTitle>
                                    {node.frontmatter.title}{" "}
                                </PostTitle>
                            </StyledLink>
                            <Date>
                            {node.frontmatter.date}
                            </Date>
                            <p>{node.excerpt}</p>
                        </Content>
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
                      fluid(maxWidth: 800) {
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
