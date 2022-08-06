import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getReviews } from '../../Services/movie_api';

const Cast = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  //   const [queryMessage, setQueryMessage] = useState('');
  const [error, setError] = useState(null);

  //   console.log(movieId);

  useEffect(() => {
    // getSearchMovie(queryMessage).then(setSearchFilms);
    async function fetchReviews() {
      // setLoading(true);
      try {
        const data = await getReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(error);
      } finally {
        console.log('finally Reviews');
        // setLoading(false);
      }
    }
    fetchReviews();
    //
  }, [movieId]);

  //   console.log(reviews);
  return (
    <>
      {error && <Navigate to="/movies" replace />}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h5>Author: {review.author}</h5>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>

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
