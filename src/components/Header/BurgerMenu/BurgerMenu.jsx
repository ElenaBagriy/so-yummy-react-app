import { Modal, Slide, useMediaQuery } from '@mui/material';
import {
  BurgerMenuWrapper,
  BurgerMenuButton,
  CloseButton,
  HeadWrapper,
  SpinachBottom,
  StyledBackdrop,
  IconClose,
  SvgIcon,
} from './BurgerMenu.styled';
import { useState } from 'react';
import { Logo } from 'reusableComponents/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { useDispatch, useSelector } from 'react-redux';
import { selectThemeIsLight } from 'redux/theme/themeSelectors';
import { toggle } from 'redux/theme/themeSlice';
import SVG from '../../../images/svg/sprite.svg';
import { useLocation } from 'react-router-dom';

export function BurgerMenu() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 1279px)');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const themeIsLight = useSelector(selectThemeIsLight);

  const light = location.pathname === '/main' || location.pathname.includes('/recipe');

  const onToggleTheme = () => {
    dispatch(toggle());
  }

  return (
    <>
      <BurgerMenuButton onClick={handleOpen}>
        <SvgIcon light={light}><use href={`${SVG}#menu`} ></use></SvgIcon>
      </BurgerMenuButton>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: StyledBackdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Slide in={open}>
          <BurgerMenuWrapper>
            <HeadWrapper>
              <Logo handleClose={handleClose} />
              <CloseButton onClick={handleClose}><IconClose/></CloseButton>
            </HeadWrapper>
            <Navigation isMobile={isMobile} handleClose={handleClose} />
            <ThemeToggler value={!themeIsLight} onToggle={onToggleTheme}/>
            <SpinachBottom />
          </BurgerMenuWrapper>
        </Slide>
      </Modal>
    </>
  );
}
