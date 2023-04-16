import styled from "styled-components";

import bgDesktop1x from '../../images/mainPage/bg-desktop@1x.png';
import bgDesktop2x from '../../images/mainPage/bg-desktop@2x.png';
import bgTablet1x from '../../images/mainPage/bg-tablet@1x.png';
import bgTablet2x from '../../images/mainPage/bg-tablet@2x.png';
import bgMobile1x from '../../images/mainPage/bg-mobile@1x.png';
import bgMobile2x from '../../images/mainPage/bg-mobile@2x.png';
import plateDesktop1x from '../../images/mainPage/plate-desktop@1x.png';
import plateDesktop2x from '../../images/mainPage/plate-desktop@2x.png';
import plateTablet1x from '../../images/mainPage/plate-tablet@1x.png';
import plateTablet2x from '../../images/mainPage/plate-tablet@2x.png';
import plateMobile1x from '../../images/mainPage/plate-mobile@1x.png';
import plateMobile2x from '../../images/mainPage/plate-mobile@2x.png';
import spinachLeftDesktop1x from '../../images/mainPage/spinachLeft-desktop@1x.png';
import spinachLeftDesktop2x from '../../images/mainPage/spinachLeft-desktop@2x.png';
import spinachLeftTablet1x from '../../images/mainPage/spinachLeft-tablet@1x.png';
import spinachLeftTablet2x from '../../images/mainPage/spinachLeft-tablet@2x.png';
import spinachLeftMobile1x from '../../images/mainPage/spinachLeft-mobile@1x.png';
import spinachLeftMobile2x from '../../images/mainPage/spinachLeft-mobile@2x.png';
import spinachRightDesktop1x from '../../images/mainPage/spinachRight-desktop@1x.png';
import spinachRightDesktop2x from '../../images/mainPage/spinachRight-desktop@2x.png';
import spinachRightTablet1x from '../../images/mainPage/spinachRight-tablet@1x.png';
import spinachRightTablet2x from '../../images/mainPage/spinachRight-tablet@2x.png';
import spinachRightMobile1x from '../../images/mainPage/spinachRight-mobile@1x.png';
import spinachRightMobile2x from '../../images/mainPage/spinachRight-mobile@2x.png';
import arrowTablet1x from '../../images/mainPage/arrowTablet@1x.png';
import arrowTablet2x from '../../images/mainPage/arrowTablet@2x.png';
import arrowDesktop1x from '../../images/mainPage/arrowDesktop@1x.png';
import arrowDesktop2x from '../../images/mainPage/arrowDesktop@2x.png';

export const BackgroundColor = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -10;
  width: 269px;
  height: 678px; 
  background-image: url(${bgMobile1x});
  background-repeat: no-repeat;
  background-size: cover;
    
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bgMobile2x});
  }

  @media screen and (min-width: 768px) {
    top: 0;
    width: 332px;
    height: 640px; 
    background-image: url(${bgTablet1x});
    background-repeat: no-repeat;
    background-size: cover;

      @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
        background-image: url(${bgTablet2x});
      }
  }
  
  @media screen and (min-width: 1280px) {
    top: 0;
    width: 725px;
    height: 689px; 
    background-image: url(${bgDesktop1x});

      @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
        background-image: url(${bgDesktop2x});
      }
  }
`;

export const SpinachLeft = styled.div`
  position: absolute;
  left: 0;
  top: 48px;
  z-index: -10;
  width: 39px;
  height: 184px; 
  background-image: url(${spinachLeftMobile1x});
  filter: blur(4.5px);
  background-repeat: no-repeat;
  background-size: cover;
    
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${spinachLeftMobile2x});
  }

  @media screen and (min-width: 768px) {
    top: 0px;
    width: 58px;
    height: 314px; 
    background-image: url(${spinachLeftTablet1x});
    background-repeat: no-repeat;
    background-size: cover;

      @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
        background-image: url(${spinachLeftTablet2x});
      }
  }
  
  @media screen and (min-width: 1280px) {
    top: 0px;
    width: 107px;
    height: 389px; 
    background-image: url(${spinachLeftDesktop1x});

      @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
        background-image: url(${spinachLeftDesktop2x});
      }
  }
`;

export const Plate = styled.div`
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  bottom: 159px;
  z-index: -10;
  width: 320px;
  height: 296px; 
  background-image: url(${plateMobile1x});
  background-repeat: no-repeat;
  background-size: cover;
    
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${plateMobile2x});
  }

  @media screen and (min-width: 768px) {
    right: 0px;
    transform: translateX(0);
    bottom: 130px;
    width: 368px;
    height: 351px; 
    background-image: url(${plateTablet1x});
    background-repeat: no-repeat;
    background-size: cover;

      @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
        background-image: url(${plateTablet2x});
      }
  }
  
  @media screen and (min-width: 1280px) {
    right: 184px;
    bottom: 135px;
    width: 578px;
    height: 539px; 
    background-image: url(${plateDesktop1x});

      @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
        background-image: url(${plateDesktop2x});
      }
  }
`;

export const SpinachRight = styled.div`
  position: absolute;
  right: 0;
  bottom: -82px;
  z-index: -10;
  width: 375px;
  height: 806px; 
  background-image: url(${spinachRightMobile1x});
  filter: blur(2px);
  background-repeat: no-repeat;
  background-size: cover;
    
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${spinachRightMobile2x});
  }

  @media screen and (min-width: 768px) {
    right: 0;
    bottom: 0px;
    width: 579px;
    height: 640px; 
    background-image: url(${spinachRightTablet1x});
    background-repeat: no-repeat;
    background-size: cover;

      @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
        background-image: url(${spinachRightTablet2x});
      }
  }
  
  @media screen and (min-width: 1280px) {
    width: 909px;
    height: 800px; 
    background-image: url(${spinachRightDesktop1x});

      @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
        background-image: url(${spinachRightDesktop2x});
      }
  }
`;

export const Arrow = styled.div`
  position: absolute;
  z-index: -10;

  @media screen and (min-width: 768px) {
    right: 72.15px;
    bottom: 92.3px;
    width: 152px;
    height: 107px; 
    background-image: url(${arrowTablet1x});
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.15));
    background-repeat: no-repeat;
    background-size: cover;

      @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
        background-image: url(${arrowTablet2x});
      }
  }
  
  @media screen and (min-width: 1280px) {
    right: 183.22px;
    bottom: 113.82px;
    width: 190px;
    height: 148px; 
    background-image: url(${arrowDesktop1x});

      @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
        background-image: url(${arrowDesktop2x});
      }
  }
`;