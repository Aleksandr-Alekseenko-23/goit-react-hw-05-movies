import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTreending } from 'api/api';
import HomePageItem from 'components/HomePageItem/HomePageItem';
import { TitleOne, List } from './HomePage.styled.js';

const HomePage = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchTreending().then(setTrending);
  }, []);

  return (
    <>
      <Outlet />
      <TitleOne>Trending today</TitleOne>
      <List>
        <HomePageItem trending={trending} />
      </List>
    </>
  );
};

export default HomePage;
