import { useParams } from 'react-router-dom';
import { StyledLink, StyledNav, StyledSVG } from './Navigation.styled';

export function Navigation({ isMobile, handleClose = () => { } }) {
  const { categoryName } = useParams();

  return (
    <StyledNav>
      <StyledLink to={!categoryName ? `/categories/beef` : `/categories/${categoryName}`} onClick={handleClose}>
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
        </StyledSVG>
        {isMobile && 'Search'}
      </StyledLink>
    </StyledNav>
  );
}
