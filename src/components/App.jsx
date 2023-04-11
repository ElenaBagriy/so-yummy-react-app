import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Theme } from 'styles/Theme';
import { SharedLayout } from './SharedLayout/SharedLayout';
import PrivateRoute from 'routes/PrivateRoute';
import { lazy } from 'react';

const CategoriesPage = lazy(() => import('../pages/CategoriesPage/CategoriesPage'));

export const App = () => {
  return (
    <div>
      <Theme>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
            path="/categories"
            element={<PrivateRoute redirectTo="/login" component={<CategoriesPage />} />}
          />
            {/* --- Отсальные страницы сюда --- */}
          </Route>
        </Routes>
      </Theme>
    </div>
  );
};
