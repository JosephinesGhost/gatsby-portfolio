import React, { Component } from "react";
import { TweenMax } from "gsap";
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
    margin: auto;
` 

const Title = styled.h3`
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

const PostTitle = styled.h6`
    margin-bottom: 0.5rem;

`
const Date = styled.p`  
    font-size: 0.8rem;
    display: block;
    color: #777;
 
`


export class Gallery extends Component {
      
      componentDidMount(){
        TweenMax.staggerFrom('.box', 0.8, {y: 120, autoAlpha: 1}, 0.2);
      }

      render(){
        return (
            <Wrapper>
            <Title>
                Works
            </Title>
                <Inner>
                {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} className='box'>
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
