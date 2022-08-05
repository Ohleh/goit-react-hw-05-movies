import { useState, useEffect } from 'react';
import getAPI from '../../Services/movie_api';

const Home = () => {
  const [trendFilms, getTrendFilms] = useState(null);

  useEffect(() => {
    getAPI.getPopularFilmsHome().then(getTrendFilms);
  }, []);

  console.log(trendFilms);

  return (
    <>
      <h3> сторінка компонента HomeView</h3>
      {/* <ul>
        <p>ddd</p>
        {trendFilms.map(trendFilm => (
          <li>{trendFilm} fn</li>
        ))}
      </ul> */}
    </>
  );
};

export default Home;
