import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser, registerUser } from 'redux/user/userOperations';
import { Formik } from 'formik';
import { BackgroundImage, Button, Container, Error, FormWrapper, InfoSVG, Input, Label, LinkStyled, SVG, Section, StyledForm, Title } from './RegisterFormStyled';
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

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function validateName(value) {
    let error;
    const lettersOnly = /^[a-zA-Z]+$/.test(value);
    if (!value) {
      error = 'Required';
    } else if (!lettersOnly) {
      error = 'Invalid name';
    } else if (value.length < 2) {
      error = 'Too Short!';
    }
    return error;
  }

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
    const digitsOnly = string =>
      [...string].every(c => '0123456789'.includes(c));
    if (!value) {
      error = 'Required!';
    } else if (value.length < 8) {
      error = 'Password must be at least 8 digits';
    } else if (digitsOnly && value.length === 8) {
      error = 'Your password is little secure';
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
            name: '',
            email: '',
            password: '',
          }}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={(values, actions) => {
            const { email, password } = values;

            setTimeout(
              dispatch(registerUser(values)).then(() => {
                dispatch(loginUser({ email, password }))
                  .then(() => {
                    toast.success(
                      `User ${values.name} email ${values.email} successfully registered`
                    );
                    navigate('/main');
                  })
                  .catch(error => {
                    if (error === 'Request failed with status code 409') {
                      return toast.error(
                        'User already exists. Try another email'
                      );
                    }
                    if (error === 'Request failed with status code 400') {
                      actions.resetForm();
                      return toast.error('Oops something went wrong');
                    }
                  });
              }),
              2000
            );
          }}
          >
            {({ errors, touched }) => {
              return (<StyledForm>
                <Title>Registration</Title>
                <Label>
                    <SVG width="24" height="24" color={setSVGColor(errors.name, touched.name)}>
                      <use href={sprite + '#icon-user'} />
                  </SVG>
                  {setInfoSVG(errors.name, touched.name)}
                    <Input name="name" placeholder="Name" validate={validateName} error={errors.name} touched={touched.name?.toString()} />
                  <Error name="name" component="div" color={setSVGColor(errors.name, touched.name)}/>
                </Label>

                <Label>
                    <SVG width="24" height="24" color={setSVGColor(errors.email, touched.email)}>
                      <use href={sprite + '#icon-mail'} />
                  </SVG>
                  {setInfoSVG(errors.email, touched.email)}
                    <Input
                      name="email"
                      placeholder="Email"
                      validate={validateEmail}
                      error={errors.email} 
                      touched={touched.email?.toString()} 
                    />
                  <Error name="email" component="div" color={setSVGColor(errors.email, touched.email)}/>
                </Label>

                <Label>
                    <SVG width="24" height="24" color={setSVGColor(errors.password, touched.password)}>
                      <use href={sprite + '#icon-lock'} />
                  </SVG>
                  {setInfoSVG(errors.password, touched.password)}
                    <Input
                      name="password"
                      placeholder="Password"
                      type="password"
                      validate={validatePassword}
                      error={errors.password} 
                      touched={touched.password?.toString()} 
                    />
                  <Error name="password" component="div" color={setSVGColor(errors.password, touched.password)}/>
                </Label>
                <Button type="submit">Sign up</Button>
              </StyledForm>)
            }}
            </Formik>
          <LinkStyled to="/signin">Sign in</LinkStyled>
        </FormWrapper>
      </Container>
    </Section>
  );
};
