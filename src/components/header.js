import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Hamburger from './hamburger'

const Wrapper = styled.div`
  margin: 0;
` 

const Container = styled.div`
  margin: 0;
`

const Title = styled.h1`
  font-family: tamarillo-jf;
  color: #444;
 
`

const StyledLink = styled(Link)`
  color: #444;
  text-decoration: none;
  float: left;
    ${Title} & {
      font-size: 2rem;
    }
`

const Menu = styled.div`
  font-family: brandon-grotesque;
  font-weight: 300;
  font-size: 0.75rem;
  letter-spacing: 2px;
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
        <StyledLink to="/" activeStyle={{
          display: 'none'
        }}>
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
