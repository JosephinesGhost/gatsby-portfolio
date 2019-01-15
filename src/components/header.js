import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Hamburger from './hamburger'

const Wrapper = styled.div`
  margin-bottom: 12rem;
` 

const Container = styled.div`
  margin: 0;
`

const Title = styled.h1`
  font-family: tamarillo-jf;
  font-weight: 400;
  color: #444;
  margin: 0;
`

const StyledLink = styled(Link)`
  color: #444;
  text-decoration: none;
  float: left;
`

const Menu = styled.div`
  font-family: acumin-pro;
  font-weight: 300;
  font-size: 0.85rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-content: flex-end; 
  float: right;

  .item {
    padding: 1rem 0.5rem;
    text-decoration: none;
  }

  @media (max-width: 1025px) {
    display: none;
    
  }
`


const Header = ({ siteTitle }) => (
  <Wrapper>
    <Container>
      <Title>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </Title>
      <Hamburger/>
      <Menu>
        <Link to={`/about/`} className='item'>
          About
        </Link>
        <Link to={`/contact/`} className='item'>
          Contact
        </Link>
      </Menu>
    </Container>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
