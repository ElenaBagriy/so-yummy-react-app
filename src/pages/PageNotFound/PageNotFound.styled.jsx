import styled from "styled-components";
import { ReactComponent as IconFor404 } from '../../images/PageNotFound/icon-for-404.svg';

export const Section = styled.section`
    text-align: center;
    padding-top: 164px;
    padding-bottom: 100px;

    @media screen and (min-width: 768px) {
      padding-bottom: 204px;
    };
  
    @media screen and (min-width: 1280px) {
      padding-top: 198px;
      padding-bottom: 203px;
    }
`;

export const Picture = styled(IconFor404)`
    width: 259px;
    height: 170px;
    margin-bottom: 14px;

    @media screen and (min-width: 768px) {
      width: 498px;
      height: 327px;
      margin-bottom: 32px;
    };
  
    @media screen and (min-width: 1280px) {
      width: 498px;
      height: 331px;
    }
`;

export const Text = styled.p`
  margin: 0 auto;
  max-width: 206px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${props => props.theme.list.option};

  @media screen and (min-width: 768px) {
    max-width: 428px;
    font-size: 18px;
    line-height: 1.33;
  };
`;

export const BoldText = styled.span`
  display: block;
  margin-bottom: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: -0.02em;
  color: ${props => props.theme.text.black};

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.02em;
  };
  
`