import React from 'react';
import styled from 'styled-components'

import Layout from '../components/layout'
import ContactForm from '../components/contact-form'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 3rem;
  max-width: 50%;

  @media (max-width: 1024px) {
    max-width: 95%;
  }
` 

const Title = styled.h3`
    display: inline-block;
    margin-bottom: 3rem;
`

const Info = styled.div`
    flex: 0 1 auto;
    order: -1;
    margin-bottom: 1.5rem;
`

const Contact = () => (
  <Layout>
    <Title>Entre em contato!</Title>
    <Wrapper>
      <Info>
        <h6>Hello...</h6>
        <p>Biscuit fruitcake chupa chups bear claw dragée sesame snaps.
        Pie sugar plum jelly-o lemon drops. Sugar plum wafer macaroon pie
        danish lollipop candy sweet roll chocolate.</p>
      </Info>
      <ContactForm />
    </Wrapper>
  </Layout>
);

export default Contact;