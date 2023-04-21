import styled from 'styled-components';

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
    gap: 20px;
  }
`;

export const SocialSVG = styled.svg`
  transition: fill 0.5s;

  &:hover,
  &:focus {
    fill: ${props =>
      props.theme.colors[props.$color === 'white' ? 'black' : 'dark']};
  }
`;
// add dark: '#1E1F28' to theme
// треба через пропси відображати різні заливки (у футері один, на додаванні рецепту інший)
