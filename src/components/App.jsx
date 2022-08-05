import { Route, Routes } from 'react-router-dom';

// import Navigation from './Navigation/Navigation';
import Movies from './Pages/Movies/Movies';
import Header from './Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';

export const App = () => {
  return (
    <>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="/movies/:movieId" element={<MovieDetails />}> */}
          {/* <Route path="/movies/:movieId/cast" element={<Cast />} /> */}
          {/* <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
          {/* </Route> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
