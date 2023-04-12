import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Theme } from 'styles/Theme';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { WelcomePage } from 'pages/WelcomePage/WelcomePage';
import { RestrictedRoute } from 'RestrictedRoute';
import RegisterPage from 'pages/RegisterPage/Register';
import SigninPage from 'pages/SigninPage/SigninPage';

// import { RegisterForm } from './RegisterForm/RegisterForm';
// import { SigninForm } from './SigningForm/SigningForm';

export const App = () => {
  // const isLoggedIn = false;
  return (
    <div>
      <Theme>
        <GlobalStyle />
        <WelcomePage />
        <Routes>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/main"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/main" component={<SigninPage />} />
            }
          />

          <Route path="/" element={<SharedLayout />}>
            {/* --- Отсальные страницы сюда --- */}
          </Route>
        </Routes>
      </Theme>
    </div>
  );
};
