import React from 'react';
import { Item, Image, LinkHome, Text } from './HomePageItem.styled.js';
import PropTypes from 'prop-types';

function HomePageItem({ trending }) {
  return trending.map(({ title, id, poster_path }) => (
    <Item key={id}>
      <LinkHome to={`/movies/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />
        <Text>{title}</Text>
      </LinkHome>
    </Item>
  ));
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
