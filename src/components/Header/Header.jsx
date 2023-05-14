import { useMediaQuery } from '@mui/material';
import { Container } from '../../reusableComponents/Container/Container';
import { Navigation } from 'components/Navigation/Navigation';
import { Logo } from 'reusableComponents/Logo/Logo';
import { UserLogo } from 'components/UserLogo/UserLogo';

import { HeaderWrapper, StyledHeader, UserMenuWrapper } from './Header.styled';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { useDispatch, useSelector } from 'react-redux';
import { selectThemeIsLight } from 'redux/theme/themeSelectors';
import { toggle } from 'redux/theme/themeSlice';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { useLocation } from 'react-router-dom';

export function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 1279px)');
  const themeIsLight = useSelector(selectThemeIsLight);

  const isBgLight = location.pathname.includes('/recipe');

  const onToggleTheme = () => {
    dispatch(toggle());
  };

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Logo />
          {!isMobile && <Navigation isMobile={isMobile} isWhite={isBgLight}/>}
          <UserMenuWrapper>
            <UserLogo/>
            {isMobile && <BurgerMenu />}
            {!isMobile && <ThemeToggler value={!themeIsLight} onToggle={onToggleTheme}/>}
          </UserMenuWrapper>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
}
