import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from 'redux/user/userOperations';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Theme } from 'styles/Theme';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import ShoppingListPage from 'pages/ShoppingList/ShoppingList';
import { useAuth } from './hooks';
import useAxiosInterceptor from './hooks/interceptors';
import { Loader } from '../reusableComponents/Loader/Loader';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const SigninPage = lazy(() => import('../pages/SigninPage/SigninPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const RecipePage = lazy(() => import('../pages/RecipePage/RecipePage'));
const CategoriesPage = lazy(() =>
  import('../pages/CategoriesPage/CategoriesPage')
);
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));
const AddRecipePage = lazy(() =>
  import('../pages/AddRecipePage/AddRecipePage')
);
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));
const MyRecipesPage = lazy(() =>
  import('../pages/MyRecipesPage/MyRecipesPage')
);

export const App = () => {
  useAxiosInterceptor();
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const { accessToken } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, accessToken]);

  return (
    !isRefreshing && (
      <div>
        <Theme>
          <GlobalStyle />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <RestrictedRoute
                    redirectTo="/main"
                    component={<WelcomePage />}
                  />
                }
              />
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

              <Route
                path="/"
                element={
                  <PrivateRoute redirectTo="/" component={<SharedLayout />} />
                }
              >
                <Route
                  path="/main"
                  element={
                    <PrivateRoute redirectTo="/" component={<MainPage />} />
                  }
                />
                <Route
                  path="categories/:categoryName"
                  element={
                    <PrivateRoute
                      redirectTo="/"
                      component={<CategoriesPage />}
                    />
                  }
                />
                <Route
                  path="*"
                  element={
                    <PrivateRoute redirectTo="/" component={<PageNotFound />} />
                  }
                />
                <Route
                  path="search"
                  element={
                    <PrivateRoute redirectTo="/" component={<SearchPage />} />
                  }
                />
                <Route
                  path="/add"
                  element={
                    <PrivateRoute
                      redirectTo="/"
                      component={<AddRecipePage />}
                    />
                  }
                />
                <Route
                  path="/my"
                  element={
                    <PrivateRoute
                      redirectTo="/"
                      component={<MyRecipesPage />}
                    />
                  }
                />
                <Route
                  path="recipe/:id"
                  element={
                    <PrivateRoute redirectTo="/" component={<RecipePage />} />
                  }
                />
                <Route
                  path="/shopping-list"
                  element={
                    <PrivateRoute
                      redirectTo="/"
                      component={<ShoppingListPage />}
                    />
                  }
                />
                <Route
                  path="/favorite"
                  element={
                    <PrivateRoute redirectTo="/" component={<FavoritePage />} />
                  }
                />
              </Route>
            </Routes>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              theme="light"
              transition={Flip}
              hideProgressBar="true"
            />
          </Suspense>
        </Theme>
      </div>
    )
  );
};
