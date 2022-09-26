import React from 'react';
import { Outlet } from 'react-router-dom';
import MoviesGalleryItem from '../MoviesGalleryItem/MoviesGalleryItem';
import { List } from '../../page/HomePage/HomePage.styled.js';
import PropTypes from 'prop-types';

function ImageGallery({ movie, movieTitle }) {
  return (
    <>
      <List>
        <MoviesGalleryItem movie={movie} movieTitle={movieTitle} />
      </List>
      <Outlet />
    </>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
