import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  margin-bottom: 3rem;
` 

const Container = styled.div`
  margin: 0 auto,
  padding: 1.45rem 1.0875rem,
`

const Title = styled.h1`
  color: #444;
  margin: 0;
`

const StyledLink = styled(Link)`
  color: #444;
  text-decoration: none;
  float: left;
`

const Menu = styled.div`
  float: right;

  .item {
    padding: 0.5rem;
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Container>
      <Title>
        <StyledLink
          to="/"
        >
          {siteTitle}
        </StyledLink>
      </Title>
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
