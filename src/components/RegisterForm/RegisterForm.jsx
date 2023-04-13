import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import picture from '../../images/welcomePage/img-sign-reg-desktop@2x.png';
import { LinkStyled, RegisterStyled } from './RegisterFormStyled';
import sprite from '../../images/welcomePage/symbol-defs.svg';

export const RegisterForm = () => (
  <RegisterStyled>
    <img src={picture} alt="" height="468" />
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={async values => {}}
    >
      <Form>
        <h2>Registration</h2>
        <label>
          <svg width="24" height="24">
            <use href={sprite + '#icon-user'} />
          </svg>
          <Field name="name" placeholder="Name" />
        </label>

        <label>
          <svg width="24" height="24">
            <use href={sprite + '#icon-mail'} />
          </svg>
          <Field name="email" placeholder="Email" />
        </label>
        <label>
          <svg width="24" height="24">
            <use href={sprite + '#icon-lock'} />
          </svg>
          <Field name="password" placeholder="Password" type="password" />
        </label>

        <button type="submit">Sign up</button>
      </Form>
    </Formik>

    <LinkStyled to="/signin">Sign in</LinkStyled>
  </RegisterStyled>
);
