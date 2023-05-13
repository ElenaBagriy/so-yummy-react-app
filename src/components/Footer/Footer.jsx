import { Container } from 'reusableComponents/Container/Container';
import { FooterLogo } from 'reusableComponents/Logo/FooterLogo/FooterLogo';
import {
  Background,
  BenefitsList,
  BenefitsWrapper,
  CopyrightInfo,
  FooterSection,
  MainWrapper,
  NavWrapper,
  SecondaryWrapper,
  Section,
  TermsInfo,
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
            <NavWrapper>
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
            </NavWrapper>
            <SubscribeForm />
          </MainWrapper>
          <FollowUsFooter />
        </Container>
      </Section>

      <Container>
        <SecondaryWrapper>
          <CopyrightInfo>© 2023 All Rights Reserved.</CopyrightInfo>
          <TermsInfo>Terms of Service</TermsInfo>
        </SecondaryWrapper>
      </Container>
      <Background />
    </FooterSection>
  );
}
