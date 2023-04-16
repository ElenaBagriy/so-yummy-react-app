import { NavLink } from "react-router-dom";
import { HeaderSection } from "./Header.styled";

export function Header() {
  return (
      <HeaderSection>
        <h2>HEADER</h2>
        <NavLink to="/main">Logo</NavLink>
        <NavLink to="/categories/beef">Categories</NavLink>
        <NavLink to="/add">Add recipes</NavLink>
        <NavLink to="/my">Favorites</NavLink>
        <NavLink to="/favorites"></NavLink>
        <NavLink to="/shopping-list">Shopping list</NavLink>
        <NavLink to="/search">Search icon</NavLink>
      </HeaderSection>
  );
}
