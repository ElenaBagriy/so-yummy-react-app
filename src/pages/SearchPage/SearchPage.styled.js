import styled from "styled-components";

export const Section = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 114px;
    padding-bottom: 100px;

    @media screen and (min-width: 768px) {
      padding-top: 136px;
      padding-bottom: 200px;
    };

    @media screen and (min-width: 1280px) {
      padding-top: 164px;
      padding-bottom: 200px;
    };
`;