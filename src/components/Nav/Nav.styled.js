import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;

  text-align: center;
  color: ${({ theme }) => theme.colors.bgMain};

  @media screen and (min-width: 768px) {
    width: 89px;
    margin-bottom: 0;
    margin-right: 60px;
    gap: 20px;
    text-align: start;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 235px;
    gap: 24px;
  } ;
`;
export const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  color: ${({ theme }) => theme.colors.bgMain};
  transition: color ${props => props.theme.hover.transition};
  &:hover,
  :focus {
    color: ${({ theme }) => theme.text.accent};
  }
`;
