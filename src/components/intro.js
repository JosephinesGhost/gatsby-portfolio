import React, { Component } from "react";
// import { TimelineLite } from "gsap";
import styled from 'styled-components'

const Wrapper = styled.div`
  /* margin: auto; */
  margin-bottom: 12rem;
  max-width: 100%;
`

const Inner = styled.div`
  /* margin: auto; */
  text-align: left;
  max-width: 40rem;
`

class Intro extends Component {

  // constructor(props){
  //   super(props);
  //   this.myTween = new TimelineLite({paused: true});
  // }

  // componentDidMount(){
  //   this.myTween.staggerFrom('.anima', 0.8, {x: 100, autoAlpha: 0}, 0.2).play();
  // }
    
      render(){
        return <div>
        <Wrapper>
          <Inner>
            <h1 className='anima'>Hi...</h1>
            <h2 className='anima'>
              Cake ice cream cake sugar plum. Jelly-o croissant bear claw.
              Pudding cheesecake marzipan jelly-o.
              Powder cupcake chocolate bar caramels gummies.
            </h2>
          </Inner>
        </Wrapper>
        </div>
      }
}

export default Intro;
