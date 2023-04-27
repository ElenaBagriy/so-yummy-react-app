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
  flex-direction: column;
  gap: 72px;
  margin-top: 72px;
  
  @media screen and (min-width: 768px) {
    gap: 100px;
    margin-top: 100px;
  };

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: normal;
    justify-content: space-between;
  }
`;

export const SecondaryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    width: 318px;
    flex-basis: 318px;
    gap: 96px;
  }
`;