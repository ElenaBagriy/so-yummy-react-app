import { useDispatch } from 'react-redux';
import {
  CallToAction,
  EmailIcon,
  HelperText,
  StyledEmailInput,
  StyledEmailLabel,
  StyledSubscribeForm,
  SubscribeBtn,
  SubscribeInputWrapper,
  SubscribeText,
} from './SubscribeForm.styled';
import { Formik } from 'formik';
import { subscribe } from 'redux/user/userOperations';
import { toast } from 'react-toastify';
import { useState } from 'react';

export function SubscribeForm() {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  const validateEmail = (value) => {
    if (!value.trim()) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
    setDisabled(false)
    let error;
    if (!value.trim()) {
      error = 'Required';
      setDisabled(true);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
    }
  
  const onSubmit = (values, actions) => {
    dispatch(subscribe(values))
      .unwrap()
      .then(() => {
        toast.success(`You subscribed succesfully!`);
        actions.resetForm();
      })
      .catch(error => {
        if (error === "Request failed with status code 409") {
          return toast.error(`Email ${values.email} is already in your subscribe list`)
        };
        return toast.error('Something went wrong, please try again later!');
      });
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      validateOnChange={true}
      validateOnBlur={false}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <StyledSubscribeForm>
          <CallToAction>Subscribe to our Newsletter</CallToAction>
          <SubscribeText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</SubscribeText>
          <SubscribeInputWrapper>
            <StyledEmailLabel>
              <StyledEmailInput
                name="email"
                placeholder="Enter your email address"
                validate={validateEmail}
                error={errors.email}
                touched={touched.email}
              />
              <EmailIcon error={errors.email} />
              {errors.email && touched.email && (
                <HelperText>{errors.email}</HelperText>
              )}
            </StyledEmailLabel>
            <SubscribeBtn type="submit" disabled={disabled}>Subcribe</SubscribeBtn>
          </SubscribeInputWrapper>
        </StyledSubscribeForm>
      )}
    </Formik>
  );
}
