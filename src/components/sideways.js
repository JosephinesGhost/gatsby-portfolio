import React, { Component } from "react";
import ScrollMagic from 'scrollmagic';
import styled from 'styled-components'

const Wrapper = styled.div`
  /* margin: auto; */
  margin-bottom: 6rem;
  text-align: left;
  max-width: 40rem;
`
const Inner = styled.div`
  font-size: 0.8rem;
  display: block;
  position: absolute;
  top: 6%;
  left: 2%;
  transform: translate(-50%) rotate(-90deg);
  &:before {
      display: block;
      background: currentColor;
      content: "";
      height: 1px;
      -webkit-transform: translateY(2px);
      transform: translateY(.7rem) translateX(-2.5rem);
      width: 2rem;
    }
`

class Sideways extends Component {

  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
}

  componentDidMount(){
    new ScrollMagic.Scene({
      duration: 500,    // the scene should last for a scroll distance of 100px
      offset: 10    // start this scene after scrolling for 50px
    })
    .setPin(".pinned") // pins the element for the the scene's duration
    .addTo(this.controller); // assign the scene to the controller
  }
    
      render(){
        return <div>
        <Wrapper>
        <Inner className='pinned'>
          <div>flaviaschaller@gmail.com</div>
        </Inner>
        </Wrapper>
        </div>
      }
}

export default Sideways;
