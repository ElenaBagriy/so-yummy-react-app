import { Container } from 'reusableComponents/Container/Container';
import { FooterLogo } from 'components/Logo/FooterLogo/FooterLogo';

import {
  Background,
  BenefitsList,
  BenefitsWrapper,
  FooterSection,
  MainWrapper,
  SecondaryWrapper,
  Section,
} from './Footer.styled';

import { FollowUsFooter } from 'components/FollowUs/FollowUsFooter/FollowUsFooter';
import { Nav } from 'components/Nav/Nav';
import { SubscribeForm } from 'components/SubscribeForm/SubscribeForm';

export function Footer() {
  return (
    <FooterSection>
      <Section>
        <Container>
          <MainWrapper>
            <BenefitsWrapper>
              <FooterLogo />
              <BenefitsList>
                <li>Database of recipes that can be replenished </li>
                <li>Flexible search for desired and unwanted ingredients</li>
                <li>Ability to add your own recipes with photos</li>
                <li>Convenient and easy to use</li>
              </BenefitsList>
            </BenefitsWrapper>
            <Nav />
            <SubscribeForm />
            <FollowUsFooter />
          </MainWrapper>
        </Container>
      </Section>

      <Container>
        <SecondaryWrapper>
          <p>© 2023 All Rights Reserved.</p>
          <p>Terms of Service</p>
        </SecondaryWrapper>
      </Container>
      <Background />
    </FooterSection>
  );
}
