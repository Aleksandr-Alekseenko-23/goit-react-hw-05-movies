import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchMovieForm.styled';
import PropTypes from 'prop-types';

function SearchMovieForm({ onSubmit }) {
  const [movieTitle, setMovieTitle] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // useEffect(() => {
  //   query && onSubmit(query);
  // }, [query]);
  // query && setMovieTitle(query)
  const handleTitleChange = ({ currentTarget: { value } }) => {
    setMovieTitle(value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (movieTitle.trim() === '') {
      toast.error('Введите название фильма!');
      return;
    }
    onSubmit(movieTitle);
    setSearchParams(movieTitle !== '' ? { query: movieTitle } : {});

    setMovieTitle('');
  };

  return (
    <Searchbar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          placeholder="Search movies"
          value={movieTitle}
          name="movieTitle"
          onChange={handleTitleChange}
        />
      </SearchForm>
    </Searchbar>
  );
}

export default SearchMovieForm;

SearchMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
