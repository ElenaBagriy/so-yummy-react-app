import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';

export const RegisterForm = () => (
  <div>
    <h1>Registration</h1>
    <Formik
      initialValues={{
        Name: '',
        Email: '',
        Password: '',
      }}
      onSubmit={async values => {}}
    >
      <Form>
        <label htmlFor="name"></label>
        <Field id="name" name="name" placeholder="Name" />
        <label htmlFor="email"></label>
        <Field id="email" name="email" placeholder="Email" />
        <label htmlFor="password"></label>
        <Field
          id="password"
          name="password"
          placeholder="Password"
          type="password"
        />
        <button type="submit">Sign up</button>
        <Link to="/signin">Sign in</Link>
      </Form>
    </Formik>
  </div>
);
