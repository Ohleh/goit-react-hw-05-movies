import { NavLinkStyled } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </>
  );
}
