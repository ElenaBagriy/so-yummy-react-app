import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../images/svg/search.svg';

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
  transition: color ${props => props.theme.hover.transition},
    stroke ${props => props.theme.hover.transition};

    svg path {
      transition: stroke ${props => props.theme.hover.transition};
    }
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

  &:hover,
  :focus,
  :active {
    color: ${({ theme }) => theme.text.accent};

    svg path {
      stroke: ${props => props.theme.text.accent};
    }
  }
`;

export const StyledSVG = styled(SearchIcon)`
  margin-right: 8px;
  transition: all ${props => props.theme.hover.transition};

  & path {
    stroke: ${props => props.theme.text.primary};
  }

  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;
