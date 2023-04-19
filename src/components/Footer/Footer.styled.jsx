import styled from "styled-components";

import spinachMobile1x from '../../images/commonImages/spinachBottom-mobile@1x.png';
import spinachMobile2x from '../../images/commonImages/spinachBottom-mobile@2x.png';
import spinachTablet1x from '../../images/commonImages/spinachBottom-tablet@1x.png';
import spinachTablet2x from '../../images/commonImages/spinachBottom-tablet@2x.png';
import spinachDesktop1x from '../../images/commonImages/spinachBottom-desktop@1x.png';
import spinachDesktop2x from '../../images/commonImages/spinachBottom-desktop@2x.png';

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