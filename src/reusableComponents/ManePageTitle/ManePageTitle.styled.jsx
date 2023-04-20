import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  /* color: ${props => `${props.theme.text.title}`}; */
  color: ${props => props.theme.colors[props.color || 'black']};

    @media screen and (min-width: 768px) {
      font-size: 32px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 44px;
    }
`