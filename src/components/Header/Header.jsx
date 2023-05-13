import { useMediaQuery } from '@mui/material';
import { Container } from '../../reusableComponents/Container/Container';
import { Navigation } from 'components/Navigation/Navigation';
import { Logo } from 'reusableComponents/Logo/Logo';
import { UserLogo } from 'components/UserLogo/UserLogo';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

import { HeaderWrapper, StyledHeader, UserMenuWrapper } from './Header.styled';
// import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';

export function Header() {
  const isMobile = useMediaQuery('(max-width: 1279px)');
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Logo />
          {!isMobile && <Navigation isMobile={isMobile} />}
          <UserMenuWrapper>
            <UserLogo />
            {isMobile && <BurgerMenu />}
            {/* {!isMobile && <ThemeToggler />} */}
          </UserMenuWrapper>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
}
