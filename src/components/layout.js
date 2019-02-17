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
        padding: 1rem 3rem 3rem;
    }
`

const Inner = styled.div`
  margin: 12rem auto 6rem;
  padding: 1rem;
  max-width: 94%;
`

const Footer = styled.div`
  padding: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3rem;
`

const FooterInner = styled.div`
  font-family: GillSansNova-Light, serif;
  font-weight: 300;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 94%;
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
            Flavia Schaller © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </FooterInner>
        </Footer>
      </Wrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
