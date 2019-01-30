import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components'

import Layout from "../components/layout"

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 3rem;
  max-width: 50%;

  @media (max-width: 1024px) {
    max-width: 95%;
  }
` 

const FormWrapper = styled(Form)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    flex: 0 1 auto;
    order: 1;
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

const TextField = styled(Field)`
    flex: 0 1 auto;
    padding: 0.3rem 0.8rem;
    margin-bottom: 1rem;
`

const Error = styled(ErrorMessage)`
    font-size: 0.5rem;
`

const Button = styled.button`
    flex: 0 1 auto;
    margin: auto;
    margin-right: 0;
`


const Basic = () => (
  <Layout>
    <Title>Entre em contato!</Title>
    <Wrapper>
      <Info>
        <h6>Hello...</h6>
        <p>Biscuit fruitcake chupa chups bear claw dragée sesame snaps.
        Pie sugar plum jelly-o lemon drops. Sugar plum wafer macaroon pie
        danish lollipop candy sweet roll chocolate.</p>
      </Info>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <FormWrapper>
              <TextField type="name" name="name" placeholder="Name"/>
              <Error name="name" component="div" />
              <TextField type="email" name="email" placeholder="Email"/>
              <Error name="email" component="div" />
              <TextField type="textarea" name="message" placeholder="Message" component="textarea"/>
              <Error name="message" component="div" />
              <Button type="submit" disabled={isSubmitting}>
                  Submit
              </Button>
          </FormWrapper>
        )}
      </Formik>
    </Wrapper>
  </Layout>
);

export default Basic;