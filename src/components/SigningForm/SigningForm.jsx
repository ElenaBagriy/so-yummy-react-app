import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { SigninStyled } from './SigningFormStyled';
import picture from '../../images/welcomePage/img-sign-reg-desktop@2x.png';

export const SigninForm = () => (
  <SigninStyled>
    <h1>Sign In</h1>
    <img src={picture} alt="" width="532" height="468" />
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      onSubmit={async values => {}}
    >
      <Form>
        <label htmlFor="email"></label>
        <Field id="email" name="email" placeholder="Name" />

        <label htmlFor="Password"></label>
        <Field id="Password" name="Password" placeholder="Password" />

        <button type="submit">Sign in</button>
        <Link to="/register">Registration</Link>
      </Form>
    </Formik>
  </SigninStyled>
);
