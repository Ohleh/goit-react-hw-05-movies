import { Navigate, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import { getSearchMovie } from '../../Services/movie_api';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [queryMessage, setQueryMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (queryMessage === '') {
      return;
    }
    async function getSearch() {
      // setLoading(true);
      try {
        const data = await getSearchMovie(queryMessage);
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
  }, [queryMessage]);

  // console.log(searchFilms);
  // console.log(queryMessage);

  return (
    <>
      {error && <Navigate to="/movies" replace />}
      <Searchbar onOnSubmit={setQueryMessage} />
      {/* <NavLink to={`/movies?query=${queryMessage}`}>1</NavLink> */}
      {/* {searchFilms && <NavLink to={`/movies?query=${queryMessage}`}></NavLink>} */}
      {searchFilms && (
        <ul>
          {/* <NavLink to={`/movies?query=${queryMessage}`}></NavLink> */}
          {searchFilms.map(searchFilm => (
            <li key={searchFilm.id}>
              <NavLink
                to={`/movies/${searchFilm.id}`}
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
    </>
  );
};

export default Movies;
