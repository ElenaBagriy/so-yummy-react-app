import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 50px;
  } ;
`;
export const SelectBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 28px;
    margin-bottom: 90px;
  } ;
`;
export const SelectText = styled.div`
  margin-right: 18px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  letter-spacing: -0.24px;

  color: ${(props) => props.theme.text.title};

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  } ;
`;
