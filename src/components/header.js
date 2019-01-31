import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from "react"
import styled from 'styled-components'

import Hamburger from '../components/hamburger'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: white;
  ;
  transition: top 0.3s;
  z-index: 90;
    &.hide {
      top: -60px;
    }
` 

const Container = styled.div`
  padding: 0.5rem 1rem;
  height: 100%;

`

const Title = styled.h1`
  float: left;
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
  height: 100%;
  font-family: brandon-grotesque;
  font-weight: 300;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center; 

  .item {
    padding: 0 0.5rem;
    text-decoration: none;
    flex: 0 1 auto;
  }

  @media (max-width: 1025px) {
    display: none;
  }
` 

export class Header extends Component {
  constructor(props){
    super(props);
    this.state = {isHidden: false};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll = () => {
    ((window.scrollY > this.prev) && (window.scrollY > 600))
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
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
