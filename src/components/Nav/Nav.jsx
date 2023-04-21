import { StyledLink, StyledNav } from './Nav.styled';

export function Nav() {
  return (
    <StyledNav>
      <StyledLink to="/search?query=ingredients">Ingredients</StyledLink>
      <StyledLink to="/add">Add recipes</StyledLink>
      <StyledLink to="/my">My recipes</StyledLink>
      <StyledLink to="/favorite">Favorite</StyledLink>
      <StyledLink to="/shopping-list">Shopping list</StyledLink>
    </StyledNav>
  );
}
