import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import './layout.css'

const Wrapper = styled.div`
  margin: 0;
  padding: 1.45rem;
  position: relative;
  min-height: 100vh;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 90%;

  padding-bottom: 3rem; // For footer
`

const Footer = styled.div`
  font-family: brandon-grotesque, serif;
  font-weight: 300;
  padding: 0.8rem;
  margin-top: 12rem;

  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3rem;
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
            Flavia Schaller © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
      </Wrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
