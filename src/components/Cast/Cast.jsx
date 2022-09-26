import React from 'react';
import { useFetchMovieCredits } from 'hooks/useFetchMovie';
import { List, Item, Image, Text, SubText } from './Cast.styled';
import imageAs from '../../assets/img/NoPhotos.png';

function Cast() {
  const movie = useFetchMovieCredits();

  return (
    <>
      {movie && (
        <List>
          {movie.cast.map(({ name, profile_path, character, id }) => {
            return (
              <Item key={id}>
                <Image
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/original${profile_path}`
                      : imageAs
                  }
                  alt={name}
                />
                <Text>{name}</Text>
                <Text>
                  Character:<SubText>{character}</SubText>
                </Text>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
}

export default Cast;
