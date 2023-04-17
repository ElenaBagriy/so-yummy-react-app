import SVG from 'images/svg/sprite.svg';
import { LogoWrapper, StyledLogoLink, StyledSVG } from './Logo.styled';

export function Logo({ handleClose = () => {} }) {
  return (
    <LogoWrapper>
      <StyledLogoLink to="/main" onClick={handleClose}>
        <StyledSVG>
          <use href={`${SVG}#icon-logo`}></use>
        </StyledSVG>
      </StyledLogoLink>
    </LogoWrapper>
  );
}
