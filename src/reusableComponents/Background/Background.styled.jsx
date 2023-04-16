import styled from "styled-components";
import greenDotMobile from '../../images/commonImages/greenDot-mobile.svg';
import blackDotMobile from '../../images/commonImages/blackDot-mobile.svg';
import greenDotDesktop from '../../images/commonImages/greenDot-desktop.svg';
import blackDotDesktop from '../../images/commonImages/blackDot-desktop.svg';

import spinachMobile1x from '../../images/commonImages/spinach-mobile@1x.png';
import spinachMobile2x from '../../images/commonImages/spinach-mobile@2x.png';
import spinachTablet1x from '../../images/commonImages/spinach-tablet@1x.png';
import spinachTablet2x from '../../images/commonImages/spinach-tablet@2x.png';
import spinachDesktop1x from '../../images/commonImages/spinach-desktop@1x.png';
import spinachDesktop2x from '../../images/commonImages/spinach-desktop@2x.png';

export const StyledDots = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%; 
  background-image: url(${greenDotMobile}),
    url(${blackDotMobile}),
    url(${greenDotMobile});
  background-repeat: no-repeat;
  background-position: left 120px top 76px, right 120px top 142px, right 15.37px top 109px;


  @media screen and (min-width: 768px) {
    background-image: url(${greenDotDesktop}),
      url(${blackDotDesktop}),
      url(${greenDotDesktop});
    background-repeat: no-repeat;
    background-position: left 219px top 85px, right 315px top 155px, right 23px top 98px;

  }
  
  @media screen and (min-width: 1280px) {
    background-image: url(${greenDotDesktop}),
      url(${blackDotDesktop}),
      url(${greenDotDesktop});
    background-position: left 328px top 117px, right 617px top 200px, right 171px top 130px;
  }
`

export const StyledSpinach = styled.div`
  position: absolute;
  left: 0;
  bottom: -251px;
  z-index: -1;
  width: 306px;
  height: 469px; 
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
    width: 491px;
    height: 772px; 
    left: 0px;
    bottom: -365.27px;
    background-image: url(${spinachTablet1x});
    filter: blur(4.5px);

      @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
        background-image: url(${spinachTablet2x});
      }
  }
  
  @media screen and (min-width: 1280px) {
    width: 687px;
    height: 1019px; 
    bottom: -509.69px;
    background-image: url(${spinachDesktop1x});
    filter: blur(4.5px);

      @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
        background-image: url(${spinachDesktop2x});
      }
  }
`
