import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Theme } from 'styles/Theme';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { WelcomePage } from 'pages/WelcomePage/WelcomePage';
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
              path="/categories"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<CategoriesPage />}
                >
                  
                </PrivateRoute>
              }
            >
              <Route path="/categories/:categoryName" element={<div>hrenovina</div>} ></Route>
            </Route>

            {/* --- Отсальные страницы сюда --- */}
          </Route>
        </Routes>
      </Theme>
    </div>
  );
};
