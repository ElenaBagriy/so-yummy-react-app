import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from 'redux/user/userOperations';
import { Formik } from 'formik';
import { LinkStyled, FormWrapper, InfoSVG, Section, SVG, Error, Label, Container, BackgroundImage, Title, Input, Button, StyledForm } from './SigningFormStyled';
import sprite from '../../images/welcomePage/symbol-defs.svg';

const setSVGColor = (errors, touched) => {
  if (errors === "Your password is little secure" && touched) {
    return "#F6C23E"
  }
  if (errors && touched) {
        return "#E74A3B"
      } else if (!errors && touched) {
        return "#3CBC81"
      } else {
        return "white"
      }
};

const setInfoSVG = (errors, touched) => {
  if (errors === "Your password is little secure" && touched) {
    return <InfoSVG><use href={sprite + '#icon-warning'} /></InfoSVG>
  }
  if (errors && touched) {
        return <InfoSVG><use href={sprite + '#icon-error'} /></InfoSVG>
      } else if (!errors && touched) {
        return <InfoSVG><use href={sprite + '#icon-success'} /></InfoSVG>
      }
    return;
};

export const SigninForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  function validatePassword(value) {
    let error;
    if (!value) {
      error = 'Required!';
    }
    return error;
  }

  return (
    <Section>
      <Container>
        <BackgroundImage />
      <FormWrapper>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={(values, actions) => {
            dispatch(loginUser(values))
              .unwrap()
              .then(() => {
                toast.success(`User ${values.email} is succesfully logged in`);
                actions.resetForm();
                navigate('/main');
              })
              .catch(error => {
                if (error === 'Request failed with status code 403') {
                  return toast.error('Email or password is wrong');
                }
                if (error === 'Request failed with status code 401') {
                  return toast.error('Email is not verified');
                }
              });
          }}
        >
          {({ errors, touched }) => (
            <StyledForm>
              <Title>Sign In</Title>
              <Label>
                <SVG width="24" height="24" color={setSVGColor(errors.email, touched.email)}>
                      <use href={sprite + '#icon-user'} />
                  </SVG>
                  {setInfoSVG(errors.email, touched.email)}
                  <Input
                    name="email"
                    placeholder="Email"
                    validate={validateEmail}
                  />

                <Error name="email" component="div" color={setSVGColor(errors.email, touched.email)}/>
              </Label>
              <Label>
                <SVG width="24" height="24" color={setSVGColor(errors.password, touched.password)}>
                      <use href={sprite + '#icon-user'} />
                  </SVG>
                  {setInfoSVG(errors.password, touched.password)}
                  <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                    validate={validatePassword}
                  />

                <Error name="password" component="div" color={setSVGColor(errors.password, touched.password)}/>
              </Label>
              <Button type="submit">Sign in</Button>
            </StyledForm>
          )}
        </Formik>
        <LinkStyled to="/register">Registration</LinkStyled>
      </FormWrapper>
    </Container>
    </Section>
  );
};
