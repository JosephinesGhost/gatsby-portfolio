import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components'

import Layout from "../components/layout"

const Wrapper = styled.div`
    max-width: 500px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin-top: 3rem;
` 

const Title = styled.h3`
    display: inline-block;
    margin-bottom: 0.7rem;
`

const TextField = styled(Field)`
    flex: 0 1 1;
    padding: 0.3rem 0.8rem;
    margin: 0.6rem 0;
`

const Button = styled.button`
    flex: 0 1 auto;
    margin: auto;
    margin-right: 0;
`


const Basic = () => (
  <Layout>
    <Title>Entre em contato!</Title>
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
        <Form>
            <Wrapper>
                <TextField type="name" name="name" placeholder="Name"/>
                <ErrorMessage name="name" component="div" />
                <TextField type="email" name="email" placeholder="Email"/>
                <ErrorMessage name="email" component="div" />
                <TextField type="textarea" name="message" placeholder="Message" component="textarea"/>
                <ErrorMessage name="message" component="div" />
                <Button type="submit" disabled={isSubmitting}>
                    Submit
                </Button>
            </Wrapper>
        </Form>
      )}
    </Formik>
  </Layout>
);

export default Basic;