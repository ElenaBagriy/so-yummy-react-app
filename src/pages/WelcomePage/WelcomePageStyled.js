import styled from 'styled-components';
import imgDesktop from '../../images/welcomePage/hero-desktop@1x.jpeg';
import imgDesktop2x from '../../images/welcomePage/hero-desktop@2x.jpeg';
import imgTabl from '../../images/welcomePage/hero-tablet@1x.jpg';
import imgTabl2x from '../../images/welcomePage/hero-tablet@2x.jpg';
import imgMob from '../../images/welcomePage/hero-mobile@1x.jpg';
import imgMob2x from '../../images/welcomePage/hero-mobile@2x.jpg';

// 1280px+
export const WelcomePageStyled = styled.main`
  padding: 275px 35px 261px 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${imgMob});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${props => props.theme.colors.white};

  //767px high-resolution
  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${imgMob2x});
  }

  //tablet
  @media screen and (min-width: 768px) {
    padding: 342px 131.5px;
    background-image: url(${imgTabl});
  }

  //768-1440px high-resolution
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${imgTabl2x});
  }

  //desktop
  @media screen and (min-width: 1440px) {
    padding: 214px 450px 216px;
    background-image: url(${imgDesktop});
  }

  //1440px+ high-resolution
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${imgDesktop2x});
  }

  img {
    margin-bottom: 28px;

    //tablet
    @media screen and (min-width: 768px) {
      margin-bottom: 44px;
    }

    //desktop
    @media screen and (min-width: 1440px) {
    }
  }

  h1 {
    margin-bottom: 14px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.02em;

    //tablet
    @media screen and (min-width: 768px) {
      font-size: 28px;
    }

    //desktop
    @media screen and (min-width: 1440px) {
    }
  }

  p {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 44px;
    text-align: center;
    font-size: 14px;
    line-height: 1.28;

    //tablet
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 1.33;
      margin-bottom: 40px;
    }

    //desktop
    @media screen and (min-width: 1440px) {
    }
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 12px;

    //tablet
    @media screen and (min-width: 768px) {
      gap: 18px;
    }

    //desktop
    @media screen and (min-width: 1440px) {
    }
  }
`;

export const BtnStyled = styled.button`
  padding: 12px 24px;
  border-radius: 24px 44px;
  border: 2px solid #8baa36;
  background-color: #8baa36;
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  line-height: 1.31;

  //tablet
  @media screen and (min-width: 768px) {
    padding: 22px 44px;
    font-size: 16px;
    line-height: 1.5;
  }

  //desktop
  @media screen and (min-width: 1440px) {
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.black};
    border-color: ${props => props.theme.colors.black};
  }

  &.outlined {
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.white};
  }

  &.outlined:hover,
  &.outlined:focus {
    color: ${props => props.theme.colors.green};
    border-color: ${props => props.theme.colors.green};
  }
`;
