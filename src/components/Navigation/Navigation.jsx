import { LinkHome, Item, List } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <LinkHome to="home">Home</LinkHome>
        </Item>
        <Item>
          <LinkHome to="movies">Movies</LinkHome>
        </Item>
      </List>
    </nav>
  );
};
