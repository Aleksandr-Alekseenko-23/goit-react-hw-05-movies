import React from 'react';
import { useFetchMovieReviews } from 'hooks/useFetchMovie';
import { Text, Title } from './Reviews.styled';

function Reviews() {
  const movie = useFetchMovieReviews();
  if (!movie) return;
  return (
    <>
      {movie.results.length === 0 ? (
        <Text>We dont have any reviews for this movie</Text>
      ) : (
        <ul>
          {movie.results.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <Title>{author}</Title>
                <Text>{content}</Text>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Reviews;
