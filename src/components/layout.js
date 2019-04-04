import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import './layout.css'


const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  padding-bottom: 3rem; /* For footer */

    @media (max-width: 800px) {
        padding: 1rem 1rem 3rem;
    }
`

const Inner = styled.div`
  margin: 12rem auto 6rem;
  padding: 1rem;
  max-width: 94%;
`

const Footer = styled.div`
  /* padding: 0.8rem; */
  display: flex;
  flex: 1 0 auto;
  justify-content: space-between;
  padding: 3rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4rem;
`

const Circle = styled.div`
    /* width: 250px;
    height: 250px;
    background: #F9F1EF;
    border-radius: 50%;
    position: absolute;
    bottom: -100px;
    left: -100px; */
    z-index: -30;
`

const FooterInner = styled.div`
  font-family: GillSansNova-Light, serif;
  font-weight: 300;
  margin: 0;
  padding: 1rem 0;
  max-width: 50%;
    & span {
      color: #DEA08B;
      padding: 3px;
    }
`

const FooterContact = styled.div`
  font-family: GillSansNova-LightItalic, serif;
  font-weight: 300;
  margin: 0;
  padding: 1rem 0;
  max-width: 50%;
  text-align: right;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Inner>
          {children}
        </Inner>
        <Footer>
          <FooterInner>
            Flavia Schaller © {new Date().getFullYear()} <span>&#10084;</span> Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </FooterInner>
          <FooterContact>
          <span class="lnr lnr-envelope">&#xe818;</span><a href="mailto:contact@foksie.co">contact@foksie.co</a>
          </FooterContact>
        </Footer>
        <Circle></Circle>
      </Wrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
