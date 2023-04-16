import { Link } from 'react-router-dom';
import { BtnStyled, WelcomePageStyled } from './WelcomePageStyled';
import logoDesktop1x from '../../images/welcomePage/logo-desk-tabl.png';
import logoDesktop2x from '../../images/welcomePage/logo-desk@2x.png';
import logoMobile from '../../images/welcomePage/logo-mob.png';
import logoMobile2x from '../../images/welcomePage/logo-mob@2x.png';
// import logoDesktop2xWebP from '../../images/welcomePage/hero-desktop@2x.webp';
// import logoDesktop1xWebp from '../../images/welcomePage/hero-desktop@1x.webp'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
// import logom from '../../images/welcomePage/logo-mob.png';
// import logom2x from '../../images/welcomePage/logo-mob@2x.png';

const WelcomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    !isLoggedIn && (
      <WelcomePageStyled>
        <picture>
          {/* desktop + tablet */}
          <source
            srcSet={`${logoDesktop1x} 1x, ${logoDesktop2x} 2x`}
            // "
            //   ./images/employee1-desktop.webp    1x,
            //   ./images/employee1-desktop@2x.webp 2x
            // "
            media="(min-width: 768px)"
            type="image/png"
          />
          {/* <source
                  srcSet="
                    ./images/employee1-desktop.jpeg    1x,
                    ./images/employee1-desktop@2x.jpeg 2x
                  "
                  media="(min-width: 1200px)"
                /> */}
          {/* mobile pic */}
          <source
            srcSet={`${logoMobile} 1x, ${logoMobile2x} 2x`}
            media="(max-width: 767px)"
            type="image/png"
          />
          {/* <source
            srcSet="
                    ./images/employee1-mobile.jpeg    1x,
                    ./images/employee1-mobile@2x.jpeg 2x
                  "
            media="(max-width: 767px)"
          /> */}
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