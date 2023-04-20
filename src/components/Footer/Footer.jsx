import { Container } from "reusableComponents/Container/Container";
import { Background, DescriptionList, FooterSection, Link, LogoText, NavList, Section } from "./Footer.styled";
import { NavLink } from "react-router-dom";
import { FollowUs } from "components/FollowUs/FollowUs";

export function Footer() {
  return (
    <FooterSection>
      <Section>
        <Container>
          <div>
            <div>
              <NavLink to='/'>
                Logo
                  <LogoText>So Yummy</LogoText>
              </NavLink>
              <DescriptionList>
                <li>Database of recipes that can be replenished </li>
                <li>Flexible search for desired and unwanted ingredients</li>
                <li>Ability to add your own recipes with photos</li>
                <li>Convenient and easy to use</li>
              </DescriptionList>
            </div>
            <nav>
              <NavList>
                <li><Link to="/search?query=ingredients">Ingredients</Link></li>
                <li><Link to='/add'>Add recipes</Link></li>
                <li><Link to='/my'>My recipes</Link></li>
                <li><Link to="/favorite">Favorite</Link></li>
                <li><Link to="/shopping-list">Shopping list</Link></li>
              </NavList>
            </nav>
            <FollowUs title={false} />
            <form>
              <label>
                <input placeholder="Enter your email address"></input>
              </label>
              <button type="submit">Subcribe</button>
            </form>
            </div>
          </Container>
      </Section>
      <div>
        <p>© 2023 All Rights Reserved.</p>
        <p>Terms of Service</p>
      </div>
      <Background />
    </FooterSection>
  );
}
