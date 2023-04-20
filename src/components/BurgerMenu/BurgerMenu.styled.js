import styled from 'styled-components';
import { Backdrop } from '@mui/material';
import menuIcon from 'images/svg/menu.svg';
import closeIcon from 'images/svg/x.svg';

import spinachBottomMobile1x from '../../images/menu/spinachMenu-mobile@1x.png';
import spinachBottomMobile2x from '../../images/menu/spinachMenu-mobile@2x.png';
import spinachBottomTablet1x from '../../images/menu/spinachMenu-tablet@1x.png';
import spinachBottomTablet2x from '../../images/menu/spinachMenu-tablet@2x.png';

export const BurgerMenuButton = styled.button`
  display: block;
  width: 28px;
  height: 28px;

  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${menuIcon});
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
export const StyledBackdrop = styled(Backdrop)`
  &.MuiBackdrop-root {
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`;
export const BrgerMenuWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 18px 16px;
  @media screen and (min-width: 768px) {
    padding: 18px 32px 32px;
  }
`;

export const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  @media screen and (min-width: 768px) {
    height: 44px;
  }
`;
export const CloseButton = styled.button`
  display: block;
  width: 32px;
  height: 32px;

  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${closeIcon});
`;

export const SpinachBottom = styled.div`
  pointer-events: none;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 312px;
  height: 334px; 
  background-image: url(${spinachBottomMobile1x});
  filter: blur(4.5px);
  background-repeat: no-repeat;
  background-size: cover;
    
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${spinachBottomMobile2x});
  }

  @media screen and (min-width: 768px) {
    width: 582px;
    height: 496px; 
    background-image: url(${spinachBottomTablet1x});
    background-repeat: no-repeat;
    background-size: cover;

      @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
        background-image: url(${spinachBottomTablet2x});
      }
  }
`;