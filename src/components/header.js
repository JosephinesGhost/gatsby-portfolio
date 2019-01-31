import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from "react"
import styled from 'styled-components'

import Hamburger from '../components/hamburger'

const Wrapper = styled.div`
  overflow: auto;
` 

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: aliceblue;
  margin-bottom: 12rem;
  transition: top 0.3s;
  z-index: 90;
    &.hide {
      top: -60px;
    }
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

export class Header extends Component {
  constructor(props){
    super(props);
    this.state = {isHidden: false};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll = () => {
    window.scrollY > this.prev
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
      <Wrapper>
        <Container className={ this.state.isHidden ? 'hide' : '' }>
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
