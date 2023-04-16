import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Theme } from 'styles/Theme';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import SigninPage from '../pages/SigninPage/SigninPage';
import ShoppingListPage from 'pages/ShoppingList/ShoppingList';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks';
import { refreshUser } from 'redux/user/userOperations';

// const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
// const SigninPage = lazy(() => import('../pages/SigninPage/SigninPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const CategoriesPage = lazy(() =>
  import('../pages/CategoriesPage/CategoriesPage')
);
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));
const AddRecipePage = lazy(() => import('../pages/AddRecipePage/AddRecipePage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div>
        <Theme>
          <GlobalStyle />
          <WelcomePage />
          <Suspense fallback={<div>Loading...</div>}>
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
                  <RestrictedRoute
                    redirectTo="/main"
                    component={<SigninPage />}
                  />
                }
              />
              <Route path="/" element={<SharedLayout />}>
                <Route
                  path="main"
                  element={
                    <PrivateRoute
                      redirectTo="/login"
                      component={<MainPage />}
                    />
                  }
                />
                <Route
                  path="categories/:categoryName"
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
                <Route
                  path="search"
                  element={
                    <PrivateRoute
                      redirectTo="/login"
                      component={<SearchPage />}
                    />
                  }
                />
                <Route
                  path="/add"
                  element={
                    <PrivateRoute
                      redirectTo="/login"
                      component={<AddRecipePage />}
                    />
                  }
                />
                <Route path="/shopping-list" element={<PrivateRoute
                      redirectTo="/login"
                      component={<ShoppingListPage />}
                    />} />
              </Route>
            </Routes>
          </Suspense>
        </Theme>
      </div>
    )
  );
};

