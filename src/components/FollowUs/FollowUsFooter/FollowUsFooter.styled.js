import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FollowList = styled.ul`
  display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px; // 2x4 for padding

    @media screen and (min-width: 768px) {
      gap: 18px;
    }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: fill ${props => props.theme.hover.transition};
  fill: ${props => props.theme.colors.green};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.white};
  }
`;

export const FacebookSVG = styled.svg`
  width: 20px;
  height: 20px;
`;
export const YoutubeSVG = styled.svg`
  width: 20px;
  height: 15px;
`;
export const TwitterbeSVG = styled.svg`
  width: 20px;
  height: 16px;
`;
export const InstagrambeSVG = styled.svg`
  width: 20px;
  height: 20px;
`;
