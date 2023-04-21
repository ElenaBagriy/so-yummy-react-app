import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    margin-right: 187px;
  }
`;

export const StyledSVG = styled.svg`
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.green};
  border-radius: 12px;
  transition: background-color ${props => props.theme.hover.transition}, box-shadow ${props => props.theme.hover.transition};

  &:hover,
    :focus {
    background-color: ${props => props.theme.colors.black};
    box-shadow: ${props => props.theme.hover.boxShadow};
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const StyledLogoLink = styled(Link)`
  display: flex;
`;
