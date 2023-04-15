// import ReactDOM from 'react-dom';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import pictureDesktop from '../../images/welcomePage/img-sign-reg-desktop.png';
import pictureDesktop2x from '../../images/welcomePage/img-sign-reg-desktop@2x.png';
import pictureTabl from '../../images/welcomePage/img-sign-reg-tablet.png';
import pictureTabl2x from '../../images/welcomePage/img-sign-reg-tablet@2x.png';
import pictureMob from '../../images/welcomePage/img-sign-reg-mobile.png';
import pictureMob2x from '../../images/welcomePage/img-sign-reg-mobile@2x.png';
import pictureDesktopWebP from '../../images/welcomePage/img-sign-reg-desktop.webp';
import pictureDesktopWebP2x from '../../images/welcomePage/img-sign-reg-desktop@2x.webp';
import pictureTablWebP from '../../images/welcomePage/img-sign-reg-tablet.webp';
import pictureTablWebP2x from '../../images/welcomePage/img-sign-reg-tablet@2x.webp';
import pictureMobWebP from '../../images/welcomePage/img-sign-reg-mobile.webp';
import pictureMobWebP2x from '../../images/welcomePage/img-sign-reg-mobile@2x.webp';
import { FormWrapper, LinkStyled, RegisterStyled } from './RegisterFormStyled';
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
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Your password is little secure')
    .required('Required'),
  // .matches(/[0-9]/, 'Password requires a number')
  // .matches(/[A-Z]/, 'Password requires an uppercase letter')
  // .matches(/[^\w]/, 'Password requires a symbol'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <RegisterStyled>
      <picture>
        {/* desktop */}
        <source
          srcSet={`${pictureDesktop} 1x, ${pictureDesktop2x} 2x`}
          media="(min-width: 1440px)"
          type="image/png"
        />
        <source
          srcSet={`${pictureDesktopWebP} 1x, ${pictureDesktopWebP2x} 2x`}
          media="(min-width: 1440px)"
          type="image/webp"
        />

        {/* tablet */}
        <source
          srcSet={`${pictureTabl} 1x, ${pictureTabl2x} 2x`}
          media="(min-width: 768px)"
          type="image/png"
        />
        <source
          srcSet={`${pictureTablWebP} 1x, ${pictureTablWebP2x} 2x`}
          media="(min-width: 768px)"
          type="image/webp"
        />

        {/* mobile */}
        <source
          srcSet={`${pictureMob} 1x, ${pictureMob2x} 2x`}
          media="(max-width: 767px)"
          type="image/png"
        />
        <source
          srcSet={`${pictureMobWebP} 1x, ${pictureMobWebP2x} 2x`}
          media="(max-width: 767px)"
          type="image/webp"
        />
        <img src={pictureMob} alt="girl sofa phone food" />
      </picture>
      <FormWrapper>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={RegisterSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values, actions) => {
            const { email, password } = values;

            setTimeout(
              dispatch(registerUser(values)).then(() => {
                dispatch(loginUser({ email, password }))
                  // .unwrap()
                  .then(() => navigate('/categories/beef'))
                  .catch(() => navigate('/'));
                actions.resetForm();
              }),
              2000
            );
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

            <button type="submit">Register</button>
          </Form>
        </Formik>

        <LinkStyled to="/signin">Sign in</LinkStyled>
      </FormWrapper>
    </RegisterStyled>
  );
};
