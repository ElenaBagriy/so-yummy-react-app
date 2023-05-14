import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.text.title};
  transition: color ${props => props.theme.hover.transition};

  &:hover,
  :focus {
    color: ${props => props.isLink ? props.theme.colors.green : props.theme.text.title};
  }

    @media screen and (min-width: 768px) {
      font-size: 32px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 44px;
    }
`