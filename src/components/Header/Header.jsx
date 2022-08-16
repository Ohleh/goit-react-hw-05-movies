import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { color: 'red' } : { color: 'blue' }
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        style={({ isActive }) =>
          isActive ? { color: 'red' } : { color: 'blue' }
        }
      >
        Movies
      </NavLink>
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
