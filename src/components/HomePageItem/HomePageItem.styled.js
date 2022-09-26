import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  flex-basis: calc(((100% - ((5) - 1) * 30px)) / 5);
  margin-right: 0px;
  flex-grow: 1;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0px;
`;

export const LinkHome = styled(NavLink)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  width: 100%;
  height: 100%;
  margin: 0px;
  list-style: none;
  text-decoration: none;
`;

export const Text = styled.p`
  text-align: center;
  margin: 0px;
  background-color: black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  color: white;
  list-style: none;
  padding-top: 5px;
  padding-bottom: 5px;
`;
