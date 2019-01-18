import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`

    @media (min-width: 1024px) {
        display: none;
        
    }
`

const BurgerMenu = styled.input`
  display: none;
`

const BurgerLabel = styled.label`
    position: fixed;
    cursor: pointer;
    width: 40px;
    height: 40px;
    right: 1rem;
    top: 1rem;
    z-index: 900;
`

const Burger = styled.div`
    width: 20px;
    right: 6px;
    top: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;


        &, ::after, ::before {
            position: absolute;
            background: #444;
            height: 1px;
            opacity: 1;
            transition: all .3s ease-in-out;
        }
        ::before {
            width: 28px;
            top: -10px;
            content: "";
        }
        ::after {
            width: 28px;
            bottom: -10px;
            content: "";
        }

    #burger-menu:checked ~ #burger-label &::after {
        transform: rotate(-45deg);
        bottom: 0px;
    }

    #burger-menu:checked ~ #burger-label &::before {
        transform: rotate(45deg);
        top: 0px;
    }

    #burger-menu:checked ~ #burger-label & {
        background: rgba(255, 255, 255, 0);
    }
`

const Inner = styled.div`
    background-color: seashell;
    width: 30rem;
    height: 100vh;
    padding: 3rem;
    position: fixed; //scroll??
    top: 0;
    right: 0;
    z-index: 800;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition-timing-function: cubic-bezier(10,2,3,1);
    transform: translateX(30rem);
    transition: 0.5s;

    #burger-menu:checked ~ & {
    transform: translateX(0rem);
}
`

const Nav = styled.div`
    font-family: brandon-grotesque;
    text-align: center;
    margin: 0.5rem auto;
    font-weight: 300;
    font-size: 0.85rem;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    color: aliceblue;
`

const Item = styled(Link)`
    text-decoration: none;  
`

const Title = styled.h1`
  font-family: tamarillo-jf;
  font-weight: 400;
`

const TitleLink = styled(Link)`
  text-decoration: none;
`

const Hamburger = () => (
        <Wrapper>
            <BurgerMenu type="checkbox" id="burger-menu" />
            <BurgerLabel id="burger-label" for="burger-menu">
                <Burger></Burger>
            </BurgerLabel>
            <Inner>
            <Title>
                <TitleLink to="/">
                    Oio!!
                </TitleLink>
             </Title>
                <Nav id="burgerLinks">
                    <Item to={`/`} className='menuitem'>
                        Home
                    </Item>
                    <Item to={`/portfolio/`} className='menuitem'>
                        Portfolio
                    </Item>
                    <Item to={`/about/`} className='menuitem'>
                        About
                    </Item>
                    <Item to={`/contact/`} className='menuitem'>
                        Contact
                    </Item>
                </Nav>
            </Inner>
        </Wrapper>
      );

Hamburger.propTypes = {
  siteTitle: PropTypes.string,
}

Hamburger.defaultProps = {
  siteTitle: ``,
}

export default Hamburger
