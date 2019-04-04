import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components'


const FormWrapper = styled(Form)`
    display: grid;
    grid-template-rows: 1fr;
` 

const TextField = styled(Field)`
    padding: 0.3rem 0.8rem;
    margin-bottom: 1rem;
    background-color: #F9F1EF;
`

const Error = styled(ErrorMessage)`
    font-size: 0.5rem;
`

const Button = styled.button`
    margin: auto;
    margin-right: 0;
`


const ContactForm = () => (
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
              <Error name="message" component="div" />
              <TextField type="name" name="name" placeholder="Name"/>
              <Error name="name" component="div" />
              <TextField type="email" name="email" placeholder="Email"/>
              <Error name="email" component="div" />
              <TextField type="textarea" name="message" placeholder="Message" component="textarea"/>
              <Button type="submit" disabled={isSubmitting}>
                  Submit
              </Button>
          </FormWrapper>
        )}
      </Formik>
);

export default ContactForm;