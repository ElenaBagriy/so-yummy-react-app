import spriteSVG from 'images/svg/sprite.svg';
import { FooterLogoLink, FooterLogoSVG, LogoText } from './FooterLogo.styled';

export function FooterLogo() {
  return (
    <FooterLogoLink to="/">
      <FooterLogoSVG>
        <use href={`${spriteSVG}#icon-logo-footer`} />
      </FooterLogoSVG>
      <LogoText>So Yummy</LogoText>
    </FooterLogoLink>
  );
}
