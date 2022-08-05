import { useState, useEffect, useRouteMatch } from 'react';
import { Navigate, NavLink, useLocation } from 'react-router-dom';
import { getPopularFilmsHome } from '../../Services/movie_api';

const Home = () => {
  // const location = useLocation();
  // const { url } = useRouteMatch();

  const [trendFilms, setTrendFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // getPopularFilmsHome().then(setTrendFilms);
    async function getFilm() {
      // setLoading(true);
      try {
        const data = await getPopularFilmsHome();
        setTrendFilms(data);
      } catch (error) {
        setError(error);
      } finally {
        console.log('finally');
        // setLoading(false);
      }
    }
    getFilm();
    //
  }, []);

  return (
    <>
      {error && <Navigate to="/" replace />}
      <ul>
        {trendFilms.map(trendFilm => (
          <li key={trendFilm.id}>
            <NavLink
              to={`/movies/${trendFilm.id}`}
              // to={{
              //   pathname: `${url}/${trendFilm.id}`,
              //   state: { from: location },
              // }}
            >
              {trendFilm.title ?? trendFilm.original_name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
