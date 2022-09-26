import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from 'api/api';

export const useFetchMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getIm() {
      await getMovie(movieId).then(res => {
        setMovie(res);
      });
    }
    if (movieId) getIm();
  }, [movieId]);
  return movie;
};
export const useFetchMovieCredits = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getIm() {
      await getMovie(movieId, 'çast').then(setMovie);
    }
    if (movieId) getIm();
  }, [movieId]);
  return movie;
};
//
export const useFetchMovieReviews = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getIm() {
      await getMovie(movieId, 'reviews').then(setMovie);
    }
    if (movieId) getIm();
  }, [movieId]);
  return movie;
};
