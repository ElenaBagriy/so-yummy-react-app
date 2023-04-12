import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';

export const SigninForm = () => (
  <div>
    <h1>Sign In</h1>
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
  </div>
);
