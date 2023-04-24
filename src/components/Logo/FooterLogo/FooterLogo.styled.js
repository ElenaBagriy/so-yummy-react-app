import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterLogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: 12px;
  }
`;

export const FooterLogoSVG = styled.svg`
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const LogoText = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700px;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.015em;
  color: ${props => props.theme.colors.bgMain};

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
