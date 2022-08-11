import {
  Navigate,
  useParams,
  Outlet,
  NavLink,
  useLocation,
} from 'react-router-dom';
import { MovieDetailsRender } from './MovieDetailsRender';
import { useState, useEffect } from 'react';
import { getMovieDetiasl } from '../../Services/movie_api';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // getSearchMovie(queryMessage).then(setSearchFilms);
    async function getDetial() {
      // setLoading(true);
      try {
        const data = await getMovieDetiasl(movieId);
        setDetails(data);
      } catch (error) {
        setError(error);
      } finally {
        console.log('finally MovieDetails');
        // setLoading(false);
      }
    }
    getDetial();
    //
  }, [movieId]);

  const goBackLink = location?.state?.from ?? `/`;

  return (
    <>
      {error && <Navigate to="/movies" replace />}
      <NavLink to={goBackLink}>Go Back</NavLink>
      <MovieDetailsRender details={details} />

      <ul>
        <li>
          <NavLink
            to={`/movies/${movieId}/cast`}
            state={{ from: location?.state?.from }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/movies/${movieId}/reviews`}
            state={{ from: location?.state?.from }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
