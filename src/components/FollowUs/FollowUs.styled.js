import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;
padding: 4px;
border-radius: 4px;

transition: fill ${props => props.theme.hover.transition}, background-color ${props => props.theme.hover.transition};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.follow.bgMain};

    & svg {
      fill: ${props => props.theme.follow.hover};
    }
  }
`;

export const StyledFollow = styled.div`
  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    margin-bottom: 36px;
    letter-spacing: -0.24px;
    color: ${props => props.theme.text.main};
  }

  ul {
    display: flex;
    align-items: center;
    gap: 12px;
  }

`;

export const SocialSVG = styled.svg`
  fill: ${props => props.theme.follow.main};;
  transition: fill ${props => props.theme.hover.transition}, background-color ${props => props.theme.hover.transition};

  &:hover,
  &:focus {
    fill: ${props => props.theme.follow.hover};
    background-color: ${props => props.theme.follow.bgMain};
  }
`;