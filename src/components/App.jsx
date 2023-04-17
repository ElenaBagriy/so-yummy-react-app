import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Theme } from 'styles/Theme';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { WelcomePage } from 'pages/WelcomePage/WelcomePage';
import Search from 'pages/Search/Search';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import SigninPage from 'pages/SigninPage/SigninPage';
import PrivateRoute from 'routes/PrivateRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/user/userOperations';

const CategoriesPage = lazy(() =>
  import('../pages/CategoriesPage/CategoriesPage')
);

export const App = () => {
  // const isLoggedIn = false;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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
            <Route
              path="/search"
              element={
                <PrivateRoute // замінить на Private
                  redirectTo="/login"
                  component={<Search />}
                />
              }
            />
            <Route
              path="/search/:searchParam"
              element={
                <PrivateRoute // замінить на Private
                  redirectTo="/login"
                  component={<Search />}
                />
              }
            />
          </Route>
        </Routes>
      </Theme>
    </div>
  );
};
