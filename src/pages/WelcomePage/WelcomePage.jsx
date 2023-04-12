import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LinkStyled, WelcomePageStyled } from './WelcomePageStyled';
// import logo from '../../images/welcomePage/logo-desk-tabl.png';
import logo2x from '../../images/welcomePage/logo-desc@2x.png';
// import logom from '../../images/welcomePage/logo-mob.png';
// import logom2x from '../../images/welcomePage/logo-mob@2x.png';

export const WelcomePage = () => {
  const isLoggedIn = false;
  return (
    !isLoggedIn && (
      <WelcomePageStyled>
        <img src={logo2x} alt="logo" width="64" />
        <h1>Welcome to the app!</h1>
        <p>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <ul>
          <li>
            <LinkStyled to="/register">Registration</LinkStyled>
          </li>
          <li>
            <LinkStyled to="/signin" className="outlined">
              Sign in
            </LinkStyled>
          </li>
        </ul>
        <Suspense fallback={<div>Loading ...</div>}>
          <Outlet />
        </Suspense>
      </WelcomePageStyled>
    )
  );
};
