import { Link } from 'react-router-dom';

import { ReactComponent as LogoSVG } from 'images/svg/logo.svg';
import { LogoWrapper } from './Logo.styled';

export function Logo() {
  return (
    <LogoWrapper>
      <Link to="/">
        <LogoSVG width="44" height="44" />
      </Link>
    </LogoWrapper>
  );
}
