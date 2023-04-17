import styled from 'styled-components';
import { Backdrop } from '@mui/material';
import menuIcon from 'images/svg/menu.svg';
import closeIcon from 'images/svg/x.svg';

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
