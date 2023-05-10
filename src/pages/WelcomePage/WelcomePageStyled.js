import styled from 'styled-components';
import imgDesktop from '../../images/welcomePage/hero-desktop@1x.png';
import imgDesktop2x from '../../images/welcomePage/hero-desktop@2x.png';
import imgTabl from '../../images/welcomePage/hero-tablet@1x.png';
import imgTabl2x from '../../images/welcomePage/hero-tablet@2x.png';
import imgMob from '../../images/welcomePage/hero-mobile@1x.png';
import imgMob2x from '../../images/welcomePage/hero-mobile@2x.png';

// 767px
export const WelcomePageStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 35px;
  padding-left: 35px;
  height: 100vh;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 58.58%, rgba(0, 0, 0, 0.345172) 78.98%, rgba(0, 0, 0, 0) 100%), url(${imgMob});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${props => props.theme.colors.white};

  //767px high-resolution
  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 58.58%, rgba(0, 0, 0, 0.345172) 78.98%, rgba(0, 0, 0, 0) 100%), url(${imgMob2x});
    background-size: cover;
  }

  //tablet
  @media screen and (min-width: 768px) {
    padding: 0 131px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 58.58%, rgba(0, 0, 0, 0.345172) 78.98%, rgba(0, 0, 0, 0) 100%), url(${imgTabl});
    background-size: cover;
  }

  //768-1440px high-resolution
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 58.58%, rgba(0, 0, 0, 0.345172) 78.98%, rgba(0, 0, 0, 0) 100%), url(${imgTabl2x});
    background-size: cover;
  }

  //desktop
  @media screen and (min-width: 1280px) {
    padding-left: 450px;
    padding-right: 450px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 58.58%, rgba(0, 0, 0, 0.345172) 78.98%, rgba(0, 0, 0, 0) 100%), url(${imgDesktop});
    background-size: cover;
  }

  //1440px+ high-resolution
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1280px),
    screen and (min-resolution: 192dpi) and (min-width: 1280px),
    screen and (min-resolution: 2dppx) and (min-width: 1280px) {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 58.58%, rgba(0, 0, 0, 0.345172) 78.98%, rgba(0, 0, 0, 0) 100%), url(${imgDesktop2x});
    background-size: cover;
  }

  img {
    margin-bottom: 28px;

    //tablet
    @media screen and (min-width: 768px) {
      margin-bottom: 44px;
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
  }

  p {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 44px;
    text-align: center;
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.02em;

    //tablet
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 1.33;
      margin-bottom: 40px;
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
  }
`;

export const BtnStyled = styled.button`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 24px 44px;
  border: none;
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  line-height: 1.5;
  transition: background-color ${props => props.theme.hover.transition}, color ${props => props.theme.hover.transition}, border-color ${props => props.theme.hover.transition};

  //tablet
  @media screen and (min-width: 768px) {
    height: 67px;
    padding: 22px 44px;
    font-size: 16px;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.black};
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
