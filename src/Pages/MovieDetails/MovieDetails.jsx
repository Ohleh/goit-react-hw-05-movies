import {
  Navigate,
  useParams,
  Outlet,
  NavLink,
  useLocation,
} from 'react-router-dom';

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

  const goBackLink = location?.state?.from ?? '/';

  return (
    <>
      {error && <Navigate to="/movies" replace />}
      <NavLink to={goBackLink}>Go Back</NavLink>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w400${details.poster_path}`}
          alt={details.title}
        />
        <h1>
          {details.title}(
          {details.release_date && details.release_date.split('-')[0]})
        </h1>
        <p>User Score: {details.vote_count}%</p>
        <h3>Overwiev</h3>
        <p>{details.overview}</p>
        <h3>Genres</h3>

        {details.genres &&
          details.genres.map(g => <span key={g.name}>{g.name} </span>)}
      </div>

      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
