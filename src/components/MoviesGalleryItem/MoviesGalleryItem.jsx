import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Item,
  LinkHome,
  Image,
  Text,
} from '../HomePageItem/HomePageItem.styled.js';
import NoPhotos from '../../assets/img/NoPhotos.png';

function ImageGalleryItem({ movie }) {
  const location = useLocation();
  return (
    <>
      {movie.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <LinkHome to={`/movies/${id}`} state={{ from: location }}>
              <Image
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={title}
              />
              <Text>{title}</Text>
            </LinkHome>
          </Item>
        );
      })}
    </>
  );
}

export default ImageGalleryItem;
