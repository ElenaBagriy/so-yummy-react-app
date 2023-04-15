import { NavLink } from "react-router-dom";

export function Header() {
  return (
      <header>
        <h2>HEADER</h2>
        <NavLink to="/main">Logo</NavLink>
        <NavLink to="/categories/beef">Categories</NavLink>
        <NavLink to="/add">Add recipes</NavLink>
        <NavLink to="/my">Favorites</NavLink>
        <NavLink to="/favorites"></NavLink>
        <NavLink to="/shopping-list">Shopping list</NavLink>
        <NavLink to="/search">Search icon</NavLink>
      </header>
  );
}
