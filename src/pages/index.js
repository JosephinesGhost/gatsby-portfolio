import React, { Component } from "react";
import { TimelineLite } from "gsap";
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Gallery from '../components/gallery'
import SEO from '../components/seo'

import Intro from '../components/intro'

const Wrapper = styled.div`
  margin: 0;
`

export class IndexPage extends Component {

  constructor(props){
      super(props);
      this.myTween = new TimelineLite({paused: true});
    }
  
    componentDidMount(){
      this.myTween.staggerFrom('.anima', 1, {x: 100, autoAlpha: 0}, 0.2)
      .staggerFrom('.box', 0.8, {y: 100, autoAlpha: 0}, 0.2, "-=.6").play();
    }

    render(){
      return (
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <Wrapper>
              <Intro />
              <Gallery />
            </Wrapper>
        </Layout>
      )
    }   
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
