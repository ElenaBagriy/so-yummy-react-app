import styled from 'styled-components';

export const Section = styled.section`
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

export const WrapperStyled = styled.div`
  display: flex;
  gap: 121px;
  margin-top: 100px;
`;
