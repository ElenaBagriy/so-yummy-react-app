import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Theme } from 'styles/Theme';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { WelcomePage } from 'pages/WelcomePage/WelcomePage';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import SigninPage from 'pages/SigninPage/SigninPage';
import PrivateRoute from 'routes/PrivateRoute';

const CategoriesPage = lazy(() =>
  import('../pages/CategoriesPage/CategoriesPage')
);

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
            <Route
              path="/categories/:categoryName"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<CategoriesPage />}
                />
              }
            />
          <Route
            path="*"
            element={
              <RestrictedRoute // замінить на Private
                redirectTo="/"
                component={<PageNotFound />}
              />
            }
          />              

            {/* --- Інші сторінки тут --- */}
          </Route>
        </Routes>
      </Theme>
    </div>
  );
};
