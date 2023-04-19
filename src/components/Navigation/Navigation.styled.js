import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 30px;
    margin-right: auto;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  color: ${({ theme }) => theme.text.heroParagraph};
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
  @media screen and (min-width: 1280px) {
    font-size: 14px;
    line-height: 1.6;
  }
  &.active {
    font-weight: 600;
    color: ${({ theme }) => theme.text.accent};
  }
`;
export const StyledSVG = styled.svg`
  margin-right: 8px;
  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;
