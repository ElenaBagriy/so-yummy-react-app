import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FollowWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
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
