// import ReactDOM from 'react-dom';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { SigninStyled, LinkStyled } from './SigningFormStyled';
import picture from '../../images/welcomePage/img-sign-reg-desktop@2x.png';
import sprite from '../../images/welcomePage/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/user/userOperations';
import { useNavigate } from 'react-router-dom';

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Wrong password').required('Wrong password'),
});

export const SigninForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <SigninStyled>
      <img src={picture} alt="" width="532" height="468" />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SigninSchema}
        onSubmit={(values, actions) => {
          dispatch(loginUser(values))
            .unwrap()
            .then(() => navigate('/main'))
            .catch(() => navigate('/'));
          // console.log(values);
          // console.log(actions);
          actions.resetForm();
        }}
      >
        <Form>
          <h2>Sign In</h2>
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
          <button type="submit">Sign in</button>
        </Form>
      </Formik>
      <LinkStyled to="/register">Registration</LinkStyled>
    </SigninStyled>
  );
};
