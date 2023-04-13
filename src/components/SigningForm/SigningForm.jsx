import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { SigninStyled, LinkStyled } from './SigningFormStyled';
import picture from '../../images/welcomePage/img-sign-reg-desktop@2x.png';
import sprite from '../../images/welcomePage/symbol-defs.svg';

export const SigninForm = () => (
  <SigninStyled>
    <img src={picture} alt="" width="532" height="468" />
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      onSubmit={async values => {}}
    >
      <Form>
        <h2>Sign In</h2>
        <label>
          <svg width="24" height="24">
            <use href={sprite + '#icon-mail'} />
          </svg>
          <Field name="email" placeholder="Name" />
        </label>
        <label>
          <svg width="24" height="24">
            <use href={sprite + '#icon-lock'} />
          </svg>
          <Field name="password" placeholder="Password" type="password" />
        </label>
        <button type="submit">Sign in</button>
      </Form>
    </Formik>
    <LinkStyled to="/register">Registration</LinkStyled>
  </SigninStyled>
);
