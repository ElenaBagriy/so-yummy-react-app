import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Theme } from 'styles/Theme';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <Theme>
        <GlobalStyle />
        тут щось буде...
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            {/* --- Отсальные страницы сюда --- */}
          </Route>
        </Routes>
      </Theme>
    </div>
  );
};
