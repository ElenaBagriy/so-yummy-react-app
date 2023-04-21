import { Modal, Slide, useMediaQuery } from '@mui/material';
import {
  BurgerMenuWrapper,
  BurgerMenuButton,
  CloseButton,
  HeadWrapper,
  SpinachBottom,
  StyledBackdrop,
  IconClose,
} from './BurgerMenu.styled';
import { useState } from 'react';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';

export function BurgerMenu() {
  const isMobile = useMediaQuery('(max-width: 1279px)');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <BurgerMenuButton onClick={handleOpen} />
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
            <ThemeToggler />
            <SpinachBottom />
          </BurgerMenuWrapper>
        </Slide>
      </Modal>
    </>
  );
}
