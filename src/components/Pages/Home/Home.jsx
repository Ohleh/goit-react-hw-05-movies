import { useState, useEffect } from 'react';
import getAPI from '../../Services/movie_api';

const Home = () => {
  const [trendFilms, getTrendFilms] = useState(null);

  useEffect(() => {
    getAPI.getPopularFilmsHome().then(getTrendFilms);
  }, []);

  return (
    <ul>
      {trendFilms.map(trendFilm => (
        <li>{trendFilm}</li>
      ))}
    </ul>
  );
};

export default Home;
