import { Navigate } from 'react-router-dom';
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
    // getSearchMovie(queryMessage).then(setSearchFilms);
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

  console.log(searchFilms);

  return (
    <>
      {error && <Navigate to="/movies" replace />}
      <Searchbar onOnSubmit={setQueryMessage} />
    </>
  );
};

export default Movies;
