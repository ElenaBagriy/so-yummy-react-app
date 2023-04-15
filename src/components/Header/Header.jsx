import { Container } from '../../reusableComponents/Container/Container';
import { Navigation } from 'components/Navigation/Navigation';
import { Logo } from 'components/Logo/Logo';
import { UserLogo } from 'components/UserLogo/UserLogo';
import { HeaderWrapper } from './Header.styled';

export function Header() {
  return (
    <>
      <header>
        <Container>
          <HeaderWrapper>
            <Logo />
            <Navigation />
            <UserLogo />
          </HeaderWrapper>
        </Container>
      </header>
    </>
  );
}
