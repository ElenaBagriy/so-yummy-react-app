import { StyledLink, StyledNav, StyledSVG } from './Navigation.styled';
import SVG from 'images/svg/sprite.svg';

export function Navigation({ isMobile, handleClose = () => {} }) {
  console.log(isMobile);
  return (
    <StyledNav>
      <StyledLink to="/categories/beef" onClick={handleClose}>
        Categories
      </StyledLink>
      <StyledLink to="/add" onClick={handleClose}>
        Add recipes
      </StyledLink>
      <StyledLink to="/my" onClick={handleClose}>
        My recipes
      </StyledLink>
      <StyledLink to="/favorite" onClick={handleClose}>
        Favorites
      </StyledLink>
      <StyledLink to="/shopping-list" onClick={handleClose}>
        Shopping list
      </StyledLink>
      <StyledLink to="/search" onClick={handleClose}>
        <StyledSVG width="24" height="24">
          <use href={`${SVG}#icon-search`} />
        </StyledSVG>
        {isMobile && 'Search'}
      </StyledLink>
    </StyledNav>
  );
}