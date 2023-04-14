import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backMob from '../../images/welcomePage/background-mobile.png';
import backMob2x from '../../images/welcomePage/background-mobile@2x.png';
import backTabl from '../../images/welcomePage/background-tablet.png';
import backTabl2x from '../../images/welcomePage/background-tablet@2x.png';
import backDesktop from '../../images/welcomePage/background-desktop.png';
import backDesktop2x from '../../images/welcomePage/background-desktop@2x.png';

export const SigninStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 305px 20px 157px;
  background-color: ${props => props.theme.colors.white};
  background-image: url(${backMob});
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: contain;

  //767px high-resolution
  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${backMob2x});
  }

  //tablet
  @media screen and (min-width: 768px) {
    font-size: 28px;
    padding: 444px 134px 100px;
    background-image: url(${backTabl});
  }

  //768-1440px high-resolution
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${backTabl2x});
  }

  //desktop
  @media screen and (min-width: 1440px) {
    background-image: url(${backDesktop});
    padding: 122px 180px 164px 760px;
    justify-content: right;
    align-items: end;
  }

  //1440px+ high-resolution
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${backDesktop2x});
  }

  img {
    position: absolute;
    top: 87px;
    left: auto;
    transform: translateX(-50%);
    z-index: 1;

    //tablet
    @media screen and (min-width: 768px) {
      top: 96px;
      left: auto;
      transform: translateX(-50%);
    }

    //desktop
    @media screen and (min-width: 1440px) {
      top: 115px;
      left: 113px;
      transform: translateX(0);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-bottom: 18px;
    padding: 32px 28px 40px;
    width: 335px;
    /* height: 419px; */
    border-radius: 30px;
    background-color: #2a2c36;
    color: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
    z-index: 2;

    //tablet
    @media screen and (min-width: 768px) {
      width: 500px;
      padding: 44px 50px;
      font-size: 28px;
    }

    //desktop
    @media screen and (min-width: 1440px) {
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.16;
    margin-bottom: 40px;

    //tablet
    @media screen and (min-width: 768px) {
      margin-bottom: 50px;
      font-size: 28px;
      line-height: 1.07;
    }
  }

  label {
    position: relative;
  }

  label:not(:nth-child(3)) {
    margin-bottom: 12px;

    //tablet
    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);

    //tablet
    @media screen and (min-width: 768px) {
      left: 18px;
    }
  }

  input {
    width: 279px;
    height: 45px;
    padding-top: 12px;
    padding-left: 40px;
    padding-bottom: 12px;
    border: 1px solid #fafafa;
    border-radius: 6px;
    background-color: transparent;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.white};

    //tablet
    @media screen and (min-width: 768px) {
      padding-top: 16px;
      padding-left: 50px;
      padding-bottom: 16px;
      min-width: 400px;
      height: 59px;
      font-size: 18px;
      line-height: 1.5;
    }

    //desktop
    @media screen and (min-width: 1440px) {
    }
  }

  button {
    width: 100%;
    height: 45px;
    margin-top: 28px;
    font-size: 16px;
    line-height: 1.12;
    border-radius: 6px;
    border: none;
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};

    &:hover,
    &:focus {
      color: ${props => props.theme.colors.black};
    }

    //tablet
    @media screen and (min-width: 768px) {
      height: 56px;
      margin-top: 50px;
    }

    //desktop
    @media screen and (min-width: 1440px) {
      height: 59px;
    }
  }

  .error {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #e74a3b;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  text-decoration: underline;
  font-size: 14px;
  line-height: 1.5;
  color: ${props => props.theme.colors.white};

  //tablet
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  //desktop
  @media screen and (min-width: 1440px) {
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.green};
  }
`;
