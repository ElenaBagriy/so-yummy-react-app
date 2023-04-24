import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.bgMain};

  @media screen and (min-width: 768px) {
    margin-right: 62px;
    gap: 20px;
    text-align: start;
  };

  @media screen and (min-width: 1280px) {
    margin-right: 0px;
    gap: 24px;
  };
`;

export const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.bgMain};
  transition: color ${props => props.theme.hover.transition};

  &:hover,
  :focus,
  :active {
    color: ${({ theme }) => theme.text.accent};
  }
`;
