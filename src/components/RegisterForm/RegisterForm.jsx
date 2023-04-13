// import ReactDOM from 'react-dom';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import picture from '../../images/welcomePage/img-sign-reg-desktop@2x.png';
import { LinkStyled, RegisterStyled } from './RegisterFormStyled';
import sprite from '../../images/welcomePage/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from 'redux/user/userOperations';


const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required(),
  // .matches(/[0-9]/, 'Password requires a number')
  // .matches(/[A-Z]/, 'Password requires an uppercase letter')
  // .matches(/[^\w]/, 'Password requires a symbol'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <RegisterStyled>
      <img src={picture} alt="" height="468" />
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          const { email, password } = values;
          dispatch(registerUser(values))
            .then(() => {dispatch(loginUser({email, password}))
            // .unwrap()
            .then(() => navigate('/main'))
            .catch(() => navigate('/'));}
            );
          
          // console.log(values);
          // console.log(actions);
          actions.resetForm();
        }}
      >
        <Form>
          <h2>Registration</h2>
          <label>
            <svg width="24" height="24">
              <use href={sprite + '#icon-user'} />
            </svg>
            <Field name="name" placeholder="Name" />
            <ErrorMessage className="error" name="name" component="div" />
          </label>

          <label>
            <svg width="24" height="24">
              <use href={sprite + '#icon-mail'} />
            </svg>
            <Field name="email" placeholder="Email" />
            <ErrorMessage className="error" name="email" component="div" />
          </label>
          <label>
            <svg width="24" height="24">
              <use href={sprite + '#icon-lock'} />
            </svg>
            <Field name="password" placeholder="Password" type="password" />
            <ErrorMessage className="error" name="password" component="div" />
          </label>

          <button type="submit">Sign up</button>
        </Form>
      </Formik>

      <LinkStyled to="/signin">Sign in</LinkStyled>
    </RegisterStyled>
  );
};
