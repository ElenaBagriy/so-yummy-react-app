import styled from "styled-components";

export const StyledTitle = styled.h1`
  padding-top: 53px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => `${props.theme.text.title}`};

    @media screen and (min-width: 768px) {
      padding-top: 73px;
      font-size: 32px;
    }

    @media screen and (min-width: 1280px) {
      padding-top: 102px;
      font-size: 44px;
    }
`