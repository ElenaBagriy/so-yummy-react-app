import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    margin-right: 187px;
  }
`;

export const StyledSVG = styled.svg`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const StyledLogoLink = styled(Link)`
  display: flex;
`;
