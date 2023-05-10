import { Link } from 'react-router-dom';
import { BtnStyled, WelcomePageStyled } from './WelcomePageStyled';
import logoDesktop1x from '../../images/welcomePage/logo-desk-tabl.png';
import logoDesktop2x from '../../images/welcomePage/logo-desk@2x.png';
import logoMobile from '../../images/welcomePage/logo-mob.png';
import logoMobile2x from '../../images/welcomePage/logo-mob@2x.png';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

const WelcomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    !isLoggedIn && (
      <WelcomePageStyled>
        <picture>
          <source
            srcSet={`${logoDesktop1x} 1x, ${logoDesktop2x} 2x`}
            media="(min-width: 768px)"
            type="image/png"
          />
          <source
            srcSet={`${logoMobile} 1x, ${logoMobile2x} 2x`}
            media="(max-width: 767px)"
            type="image/png"
          />
          <img src={logoMobile} alt="logo" />
        </picture>
        <h1>Welcome to the app!</h1>
        <p>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <ul>
          <li>
            <Link to="/register">
              <BtnStyled>Registration</BtnStyled>
            </Link>
          </li>
          <li>
            <Link to="/signin">
              <BtnStyled className="outlined">Sign in</BtnStyled>
            </Link>
          </li>
        </ul>
      </WelcomePageStyled>
    )
  );
};

export default WelcomePage;