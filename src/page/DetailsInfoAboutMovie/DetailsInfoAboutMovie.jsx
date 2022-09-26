import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import {
  ImageGoBack,
  ButtonGoBack,
  TextButton,
  Title,
  WrappenFlex,
  Text,
  SubText,
  LinkDetails,
} from './DetailsInfoAboutMovie.styled';
import GoBack from '../../assets/img/pngwing.com.png';


function DetailsInfoAboutMovie() {
  const movie = useFetchMovie();
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <>
      {movie && (
        <>
          
            <ButtonGoBack
              onClick={() => navigation(location?.state?.from ?? '/')}
            >
              <ImageGoBack src={GoBack} alt="go back" />
              <TextButton>Go back</TextButton>
            </ButtonGoBack>
            <WrappenFlex>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                width="700"
              />
              <div>
                <Title>
                  {movie.title}
                  <SubText>({movie.release_date.substr(0, 4)})</SubText>
                </Title>
                <Text>
                  User Score: <SubText>{movie.vote_average}</SubText>
                </Text>
                <Text>Overview</Text>
                <Text>{movie.overview}</Text>
                <Text>
                  Genres: <SubText>{movie.genres[0].name}</SubText>
                </Text>
              </div>
            </WrappenFlex>
            <Title>Additional information</Title>
            <LinkDetails to="cast" state={location.state}>
              Cast
            </LinkDetails>
            <LinkDetails to="reviews" state={location.state}>
              Reviews
            </LinkDetails>
            <Outlet />
          
        </>
      )}
    </>
  );
}

export default DetailsInfoAboutMovie;
