import SVG from 'images/svg/sprite.svg';
import { LogoWrapper, StyledLogoLink, StyledSVG } from './Logo.styled';
import PropTypes from 'prop-types';

export function Logo({ handleClose = () => {} }) {
  return (
    <LogoWrapper>
      <StyledLogoLink to="/" onClick={handleClose}>
        <StyledSVG>
          <use href={`${SVG}#icon-logo`}></use>
        </StyledSVG>
      </StyledLogoLink>
    </LogoWrapper>
  );
};

Logo.propTypes = {
  handleClose: PropTypes.func,
};
