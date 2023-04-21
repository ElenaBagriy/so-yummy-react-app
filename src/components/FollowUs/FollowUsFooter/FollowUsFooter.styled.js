import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FollowWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    bottom: 50px;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 20px;
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
export const StyledSVG = styled.svg`
  width: 20px;
  height: 20px;
`;
