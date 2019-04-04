import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import Hamburger from '../components/hamburger'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: white;
  margin-bottom: 6rem;
  transition: top 0.3s;
  z-index: 90;
    &.hide {
      top: -60px !important;
    }
` 

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center;  */
  padding: 1rem;
  height: 100%;
  max-width: 94%;
  margin: 0 auto;
`

const Title = styled.div`
  font-family: cormorant-garamond, sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  flex: 0 1 auto;
`

const StyledLink = styled(Link)`
  color: #444;
  text-decoration: none;
    &:hover {
      color: #444;
    }
`

const Menu = styled.div`
  font-family: GillSansNova-Light;
  font-weight: 300;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  flex: 0 1 auto;

  .item {
    padding-left: 0.5rem;
    text-decoration: none;
  }

  @media (max-width: 1025px) {
    display: none;
  }
` 

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {isHidden: false};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll = () => {
    ((window.scrollY > this.prev) && (window.scrollY > 150))
      ? !this.state.isHidden && this.setState({ isHidden: true })
      : this.state.isHidden && this.setState({ isHidden: false });
    this.prev = window.scrollY;
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render(){
    return (
      <Wrapper className={ this.state.isHidden ? 'hide' : '' }>
        <Container>
          <Title>
            <StyledLink to="/" activeStyle={{
              border: 'none'
            }}>
              {this.props.siteTitle}
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
          <Hamburger/>
        </Container>
      </Wrapper>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
