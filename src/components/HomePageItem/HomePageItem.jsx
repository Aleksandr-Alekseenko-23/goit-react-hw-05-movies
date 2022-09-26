import React from 'react';
import { Item, Image, LinkHome, Text } from './HomePageItem.styled.js';
import PropTypes from 'prop-types';
import imageAs from './../../assets/img/NoPhotos.png';

function HomePageItem({ trending }) {
  return trending.map(({ title, id, poster_path }) => {
    return (
      <Item key={id}>
        <LinkHome to={`/movies/${id}`}>
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : imageAs
            }
            alt={title}
          />
          <Text>{title}</Text>
        </LinkHome>
      </Item>
    );
  });
}

export default HomePageItem;

HomePageItem.propTypes = {
  trending: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
