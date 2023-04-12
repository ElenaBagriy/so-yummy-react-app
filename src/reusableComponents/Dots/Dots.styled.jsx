import styled from "styled-components";
import greenDotMobile from '../../images/commonImages/greenDot-mobile.svg';
import blackDotMobile from '../../images/commonImages/blackDot-mobile.svg';
import greenDotDesktop from '../../images/commonImages/greenDot-desktop.svg';
import blackDotDesktop from '../../images/commonImages/blackDot-desktop.svg';

export const StyledDots = styled.div`
  position: absolute;
  width: 100%;
  height: 100%; 
  background-image: url(${greenDotMobile}),
  url(${blackDotMobile}),
    url(${greenDotMobile});
  background-repeat: no-repeat;
  background-size: 8px 8px, 6px 6px, 8px 8px;
  background-position: left 120px top 76px, right 120px top 141.46px, right 15.37px top 108.36px;
    
  @media screen and (min-width: 768px) {
    background-image: url(${greenDotDesktop}),
      url(${blackDotDesktop}),
      url(${greenDotDesktop});
    background-repeat: no-repeat;
    background-size: 14px 14px, 12px 12px, 14px 14px;
    background-position: left 219px top 85px, right 315px top 155px, right 23px top 98px;
  }
  
  @media screen and (min-width: 1280px) {
    width: 1280px;
    background-position: left 328px top 116px, right 617px top 199px, right 171px top 129px;
  }
`