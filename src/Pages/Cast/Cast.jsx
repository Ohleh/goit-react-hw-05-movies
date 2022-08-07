import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getActorsCast } from '../../Services/movie_api';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(null);

  useEffect(() => {
    // getSearchMovie(queryMessage).then(setSearchFilms);
    async function getCast() {
      // setLoading(true);
      try {
        const data = await getActorsCast(movieId);
        setCast(data);
      } catch (error) {
        setError(error);
      } finally {
        console.log('finally Cast');
        // setLoading(false);
      }
    }
    getCast();
    //
  }, [movieId]);

  return (
    <>
      {error && <Navigate to="/movies" replace />}
      {!cast ? (
        <p>We don`t have any cast on this movie</p>
      ) : (
        <ul>
          {cast.map(cst => (
            <li key={cst.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${cst.profile_path}`}
                alt={cst.name}
              />
              <p> {cst.name}</p>
              <p>Character: {cst.character ?? 'individual character'}</p>
            </li>
          ))}
        </ul>
      )}

      {/* <Searchbar onOnSubmit={setQueryMessage} />

      {searchFilms && (
        <ul>
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
      )} */}
    </>
  );
};

export default Cast;
