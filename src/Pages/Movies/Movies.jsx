import {
  Navigate,
  NavLink,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import { getSearchMovie } from '../../Services/movie_api';

const Movies = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchFilms, setSearchFilms] = useState([]);
  // const [queryMessage, setQueryMessage] = useState('');
  const [error, setError] = useState(null);

  // console.log(queryMessage);

  useEffect(() => {
    const film = searchParams.get('query');
    if (!film) return;

    async function getSearch() {
      // setLoading(true);
      try {
        const data = await getSearchMovie(film);
        setSearchFilms(data);
      } catch (error) {
        setError(error);
      } finally {
        console.log('finally Movies');
        // setLoading(false);
      }
    }
    getSearch();

    //
  }, [searchParams]);

  const onHandle = queryMessage => {
    setSearchParams({ query: queryMessage });
    // setQueryMessage(searchParams.get('query'));
  };

  return (
    <>
      {error && <Navigate to="/movies" replace />}
      <Searchbar onOnSubmit={onHandle} />

      {searchFilms && (
        <ul>
          {searchFilms.map(searchFilm => (
            <li key={searchFilm.id}>
              <NavLink
                to={`/movies/${searchFilm.id}`}
                state={{ from: location }} // для goBackLink в MovieDetails
                // to={{
                //   pathname: `${url}/${searchFilm.id}`,
                //   state: { from: location },
                // }}
              >
                {searchFilm.title ?? searchFilm.original_name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      {/* <Outlet /> */}
      {/* </NavLink>  */}
    </>
  );
};

export default Movies;
