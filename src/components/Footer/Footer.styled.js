import styled from 'styled-components';

import spinachMobile1x from '../../images/commonImages/spinachBottom-mobile@1x.png';
import spinachMobile2x from '../../images/commonImages/spinachBottom-mobile@2x.png';
import spinachTablet1x from '../../images/commonImages/spinachBottom-tablet@1x.png';
import spinachTablet2x from '../../images/commonImages/spinachBottom-tablet@2x.png';
import spinachDesktop1x from '../../images/commonImages/spinachBottom-desktop@1x.png';
import spinachDesktop2x from '../../images/commonImages/spinachBottom-desktop@2x.png';
import { NavLink } from 'react-router-dom';

export const FooterSection = styled.footer`
  position: relative;
`;

export const Section = styled.div`
  padding-top: 28px;
  padding-bottom: 16px;
  background-color: ${props => props.theme.colors.footer};

  @media screen and (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 20px;
  };

  @media screen and (min-width: 1280px) {
    padding-top: 64px;
    padding-bottom: 46px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 42px;  //4px for social padding
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 72px;
    margin-bottom: 33.5px;  //4px for social padding
  }
  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 37px;  //4px for social padding
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    gap: 159px;
  }
`;

export const BenefitsWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;

export const BenefitsList = styled.ul`
  display: none;
  
  @media screen and (min-width: 768px) {
    list-style: disc;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 28px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.text.white};
  }

  @media screen and (min-width: 1280px) {
    gap: 12px;
    font-size: 18px;
    line-height: 1.33;
    max-width: 418px;
  }
`;

export const SecondaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 28px;
  padding-bottom: 28px;
  gap: 14px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
    gap: 28px;
  };

  @media screen and (min-width: 1280px) {
    padding-top: 50px;
    padding-bottom: 50px;
    gap: 40px;
  }
`;

export const CopyrightInfo = styled.p`
    font-weight: 500;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.01em;
    color: ${props => props.theme.text.main};
    opacity: 0.5;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
`;

export const TermsInfo = styled(NavLink)`
    font-weight: 400;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.01em;
    color: ${props => props.theme.text.main};
    opacity: 0.5;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
`;

export const Background = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 170px;
  height: 146px;
  background-image: url(${spinachMobile1x});
  filter: blur(4.5px);
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${spinachMobile2x});
  }

  @media screen and (min-width: 768px) {
    width: 332px;
    height: 252px;
    background-image: url(${spinachTablet1x});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${spinachTablet2x});
    }
  }

  @media screen and (min-width: 1280px) {
    width: 522px;
    height: 382px;
    background-image: url(${spinachDesktop1x});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${spinachDesktop2x});
    }
  }
`;
