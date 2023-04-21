import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { ReactComponent as ClockIcon } from "../../../images/svg/clock.svg";
import backgroundDesktop from "../../../images/recipePage/vegetables@1x.jpg";
import webP from "../../../images/recipePage/vegetables@1x.webp";
import backgroundMobile1x from "../../../images/recipePage/vegetables-mobile@1x-min.jpg";
import backgroundMobile2x from "../../../images/recipePage/vegetables-mobile@2x-min.jpg";
import backgroundTablet1x from "../../../images/recipePage/vegetables-tablet@1x-min.jpg";
import backgroundTablet2x from "../../../images/recipePage/vegetables-tablet@2x-min.jpg";
import backgroundDesktop1x from "../../../images/recipePage/vegetables-desktop@1x-min.jpg";
import backgroundDesktop2x from "../../../images/recipePage/vegetables-desktop@2x-min.jpg";



export const Hero = styled.section`
  padding-top: 144px;
  padding-bottom: 90px;
  padding-left: 16px;
  padding-right: 16px;
  background-image: url(${backgroundMobile1x});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;


  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${backgroundMobile2x});
  }



    @media screen and (min-width: 768px) {
      padding-top: 136px;
      padding-bottom: 32px;
      padding-left: 32px;
      padding-right: 32px;
      background-image: url(${backgroundTablet1x});

      @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        screen and (min-resolution: 2dppx) {
          background-image: url(${backgroundTablet2x});
      }
    };

    @media screen and (min-width: 1280px) {
      padding-top: 164px;
      padding-bottom: 32px;
      padding-left: 100px;
      padding-right: 100px;
      background-image: url(${backgroundDesktop1x});

      @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        screen and (min-resolution: 2dppx) {
          background-image: url(${backgroundDesktop2x});
      }
    };
`;

export const TextWrapper = styled.div`
  width: 299px;
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 506px;
  };

  @media screen and (min-width: 1280px) {
    width: 656px;
  }
`;

export const MainPageTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1;
  letter-spacing: ${(p) => p.theme.letterSpacings.base};
  text-align: center;
  color: ${(p) => p.theme.colors.green};
  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.xl};
  }
  ${(p) => p.theme.sizes.desktop} {
    font-size: ${(p) => p.theme.fontSizes.xl};
    /* ${(p) =>
      p.$isBig &&
      css`
        font-size: ${(p) => p.theme.fontSizes.l};
      `} */
  }
`;


export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  width: 100%;
  max-width: 656px;
  margin: 0 auto;
  margin-top: 18px;
  color: ${(p) => p.theme.text.hero};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: 1.33;
  text-align: center;
  letter-spacing: ${(p) => p.theme.letterSpacings.base};
  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.sm};
    margin-top: 24px;
    ${(p) =>
      p.$isBig &&
      css`
        font-size: ${(p) => p.theme.fontSizes.s};
      `}
  }
`;

export const Button = styled(motion.button)`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  font-size: ${(p) => p.theme.fontSizes.xxxs};
  line-height: 1.5;
  display: block;
  background-color: transparent;
  padding: 10px 18px;
  border-radius: 24px 44px;
  border: 1px solid #8baa36;
  color: ${props => props.theme.text.heroParagraph};
  cursor: pointer;
  ${(p) => p.theme.sizes.tablet} {
    margin-top: 30px;
    font-size: ${(p) => p.theme.fontSizes.s};
    line-height: 1.5;
    padding: 18px 44px;
  }
`;

export const Box = styled.div`
  position: relative;
  z-index: 3;
  margin-top: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(p) => p.theme.sizes.tablet} {
    margin-top: 60px;
  }
`;

export const ClockSvg = styled(ClockIcon)`
  width: 14px;
  height: 14px;
  ${(p) => p.theme.sizes.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const Time = styled.span`
  margin-left: 4px;
  color: ${(p) => p.theme.text.heroParagraph};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: ${(p) => p.theme.fontSizes.xxxs};
  line-height: 1.4;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    margin-left: 8px;
    font-size: ${(p) => p.theme.fontSizes.xs};
    line-height: 1.43;
  };
`;
