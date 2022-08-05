import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
