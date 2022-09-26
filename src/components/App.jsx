import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader.jsx';
import { Navigation } from './Navigation/Navigation.jsx';
import Container from './Container/Container.jsx';

const HomePageLazy = lazy(() => import('../page/HomePage/HomePage.jsx'));
const SearchMovieLazy = lazy(() => import('../page/SearchMovie/SearchMovie'));
const DetailsInfoAboutMovieLazy = lazy(() =>
  import('page/DetailsInfoAboutMovie/DetailsInfoAboutMovie.jsx')
);
const CastLazy = lazy(() => import('./Cast/Cast'));
const ReviewsLazy = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/') {
      navigate('home');
    }
  }, [navigate, pathname]);

  return (
    <>
      <Container>
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePageLazy />} />
            <Route path="/movies" element={<SearchMovieLazy />} />
            <Route
              path="/movies/:movieId"
              element={<DetailsInfoAboutMovieLazy />}
            >
              <Route path="cast" element={<CastLazy />} />
              <Route path="reviews" element={<ReviewsLazy />} />
            </Route>
            <Route path="*" element={<HomePageLazy />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
