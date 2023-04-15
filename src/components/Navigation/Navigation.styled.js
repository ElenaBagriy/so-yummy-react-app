import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
`;
