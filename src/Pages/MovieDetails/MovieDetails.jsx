import { Navigate, useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { getMovieDetiasl } from '../../Services/movie_api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);

  console.log(details);

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

  //   console.log(details.id);

  return (
    <>
      {error && <Navigate to="/movies" replace />}
      <div>
        <img src={details.poster_path} alt={details.title} />
        <h1>
          {details.title}({details.release_date})
        </h1>
        <p>User Score: {details.vote_count}%</p>
        <h3>Overwiev</h3>
        <p>{details.overview}</p>
        <h3>Genres</h3>

        {/* {details.genres.map(g => (
          <span>{g.name} </span>
        ))} */}
      </div>
    </>
  );
};

export default MovieDetails;
