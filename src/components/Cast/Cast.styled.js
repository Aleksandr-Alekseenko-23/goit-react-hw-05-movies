import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 30px;
`;

export const Item = styled.li`
  flex-basis: calc(((100% - ((5) - 1) * 30px)) / 5);
  margin-right: 0px;
  flex-grow: 1;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  /* height: 100%; */
  margin: 0px;
`;

export const Text = styled.p`
  text-align: center;
  margin: 0px;
  background-color: black;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
  color: white;
  list-style: none;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const SubText = styled.span`
  color: white;
  margin-left: 5px;
`;
