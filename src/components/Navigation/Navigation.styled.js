import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.heroParagraph};
`;
