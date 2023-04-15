import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Theme } from 'styles/Theme';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import SigninPage from '../pages/SigninPage/SigninPage';

// const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
// const SigninPage = lazy(() => import('../pages/SigninPage/SigninPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const CategoriesPage = lazy(() => import('../pages/CategoriesPage/CategoriesPage'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));

export const App = () => {

  return (
    <div>
      <Theme>
        <GlobalStyle />
        <WelcomePage />
        <Routes>
          <Route path="/register" element={<RestrictedRoute redirectTo="/main" component={<RegisterPage />}/>}/>
          <Route path="/signin" element={ <RestrictedRoute redirectTo="/main" component={<SigninPage />} />}/>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/main" element={ <PrivateRoute redirectTo="/login" component={<MainPage />}/>}/>
            <Route path="/categories/:categoryName" element={ <PrivateRoute redirectTo="/login" component={<CategoriesPage />}/>}/>
            <Route path="*" element={<RestrictedRoute // замінить на Private 
              redirectTo="/" component={<PageNotFound />}
            />}/>
            <Route path="/search" element={<PrivateRoute redirectTo="/login" component={<SearchPage />} /> } />
          </Route>
        </Routes>
      </Theme>
    </div>
  );
};
