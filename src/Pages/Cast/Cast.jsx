import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getActorsCast } from '../../Services/movie_api';
import CastRender from './CastRender';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

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
        <CastRender cast={cast} />
      )}
    </>
  );
};

export default Cast;
