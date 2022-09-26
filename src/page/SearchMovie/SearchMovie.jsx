import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';
import MoviesGallery from '../../components/MoviesGallery/MoviesGallery';
import { fetchMovies } from 'api/api';
import { WrapperFlex } from './SearchMovie.styled.js';
import Loader from 'components/Loader/Loader';

function SearchMovie() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const query = location.search.replace(/\?query=/, '') || '';

  useEffect(() => {
    async function getIm() {
      if (!movieTitle && !query) return;
      try {
        setLoading(true);
        const response = await fetchMovies(movieTitle || query);
        setMovie(prevState => [...prevState, ...response]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getIm();
  }, [movieTitle, query]);

  const handleSearchSubmit = movieTitle => {
    setMovieTitle(movieTitle);
  };

  return (
    <>
      <WrapperFlex>
        <SearchMovieForm onSubmit={handleSearchSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <ToastContainer autoClose={3000} />
      </WrapperFlex>
      {loading && <Loader />}
      <MoviesGallery movie={movie} movieTitle={movieTitle} />
    </>
  );
}

export default SearchMovie;
