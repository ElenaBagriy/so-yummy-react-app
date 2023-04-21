import { Container } from 'reusableComponents/Container/Container';
import { FooterLogo } from 'components/Logo/FooterLogo/FooterLogo';

import {
  Background,
  BenefitsList,
  FooterSection,
  Link,
  MainWrapper,
  Section,
  StyledNav,
} from './Footer.styled';

import { FollowUsFooter } from 'components/FollowUs/FollowUsFooter/FollowUsFooter';

export function Footer() {
  return (
    <FooterSection>
      <Section>
        <Container>
          <MainWrapper>
            <div>
              <FooterLogo />
              <BenefitsList>
                <li>Database of recipes that can be replenished </li>
                <li>Flexible search for desired and unwanted ingredients</li>
                <li>Ability to add your own recipes with photos</li>
                <li>Convenient and easy to use</li>
              </BenefitsList>
            </div>
            <StyledNav>
              <Link to="/search?query=ingredients">Ingredients</Link>
              <Link to="/add">Add recipes</Link>
              <Link to="/my">My recipes</Link>
              <Link to="/favorite">Favorite</Link>
              <Link to="/shopping-list">Shopping list</Link>
            </StyledNav>

            <form>
              <p>Subscribe to our Newsletter</p>
              <p>
                Subscribe up to our newsletter. Be in touch with latest news and
                special offers, etc.
              </p>
              <label>
                <input placeholder="Enter your email address"></input>
              </label>
              <button type="submit">Subcribe</button>
            </form>
            <FollowUsFooter />
          </MainWrapper>
        </Container>
      </Section>

      <Container>
        <p>© 2023 All Rights Reserved.</p>
        <p>Terms of Service</p>
      </Container>
      <Background />
    </FooterSection>
  );
}
