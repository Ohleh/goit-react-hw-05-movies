import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// import Header from './Header/Header';
// import Movies from '../Pages/Movies/Movies';
// import Home from '../Pages/Home/Home';
// import MovieDetails from '../Pages/MovieDetails/MovieDetails';
// import Cast from '../Pages/Cast/Cast';
// import Reviews from '../Pages/Reviews/Reviews';

const Header = lazy(() => import('./Header/Header'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const Home = lazy(() => import('../Pages/Home/Home'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Pages/Cast/Cast'));
const Reviews = lazy(() => import('../Pages/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};
