import { StyledLink, StyledNav } from './Navigation.styled';

export function Navigation() {
  return (
    <>
      <StyledNav>
        {/* <NavLink to={`/categories/:${categoryName}`}>Categories</NavLink> */}
        <StyledLink to="/categories/beef">Categories</StyledLink>
        <StyledLink to="/add">Add recipes</StyledLink>
        <StyledLink to="/my">My recipes</StyledLink>
        <StyledLink to="/favorite">Favorites</StyledLink>
        <StyledLink to="/shopping-list">Shopping list</StyledLink>
        <StyledLink to="/search">Search</StyledLink>
      </StyledNav>
    </>
  );
}
