import { useParams } from 'react-router-dom';
import { StyledLink, StyledNav, StyledSVG } from './Navigation.styled';
import PropTypes from 'prop-types';

export function Navigation({ isMobile, handleClose = () => { }, isWhite }) {
  
  const { categoryName } = useParams();

  return (
    <StyledNav>
      <StyledLink to={!categoryName ? `/categories/beef` : `/categories/${categoryName}`} onClick={handleClose} iswhite={isWhite?.toString()}>
        Categories
      </StyledLink>
      <StyledLink to="/add" onClick={handleClose} iswhite={isWhite?.toString()}>
        Add recipes
      </StyledLink>
      <StyledLink to="/my" onClick={handleClose} iswhite={isWhite?.toString()}>
        My recipes
      </StyledLink>
      <StyledLink to="/favorite" onClick={handleClose} iswhite={isWhite?.toString()}>
        Favorites
      </StyledLink>
      <StyledLink to="/shopping-list" onClick={handleClose} iswhite={isWhite?.toString()}>
        Shopping list
      </StyledLink>
      <StyledLink to="/search" onClick={handleClose} iswhite={isWhite?.toString()}>
        <StyledSVG width="24" height="24"  iswhite={isWhite?.toString()}>
        </StyledSVG>
        {isMobile && 'Search'}
      </StyledLink>
    </StyledNav>
  );
};

Navigation.propTypes = {
  isMobile: PropTypes.bool,
  handleClose: PropTypes.func,
  isWhite: PropTypes.bool,
};
