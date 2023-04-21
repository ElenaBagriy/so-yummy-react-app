import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;
padding: 6px;

transition: fill ${props => props.theme.hover.transition}, background-color ${props => props.theme.hover.transition};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.green};

    & svg {
      fill: ${props => props.theme.colors.white};
    }
  }
`;

export const StyledFollow = styled.div`
  h3 {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
    color: ${props => props.theme.text.primary};
  }

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
  }

`;

export const SocialSVG = styled.svg`
  transition: fill ${props => props.theme.hover.transition}, background-color ${props => props.theme.hover.transition};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.green}
  }
`;

// add dark: '#1E1F28' to theme
// треба через пропси відображати різні заливки (у футері один, на додаванні рецепту інший)
