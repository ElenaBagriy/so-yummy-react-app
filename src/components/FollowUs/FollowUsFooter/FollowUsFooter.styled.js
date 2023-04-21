import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FollowWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 21px;

  @media screen and (min-width: 768px) {
    bottom: 24px;
  }
  @media screen and (min-width: 1280px) {
    bottom: 50px;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 16px;
    @media screen and (min-width: 768px) {
      gap: 18px;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  transition: fill 0.5s;
  fill: #8baa36;
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
