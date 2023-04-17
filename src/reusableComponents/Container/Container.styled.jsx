import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 375px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  };
  
  @media screen and (min-width: 1280px) {
    max-width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;