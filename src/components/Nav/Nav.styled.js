import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 89px;
  margin-right: 235px;
  color: ${({ theme }) => theme.colors.bgMain};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  } ;
`;
export const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.bgMain};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  } ;
`;
