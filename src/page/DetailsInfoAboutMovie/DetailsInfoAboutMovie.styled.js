import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ImageGoBack = styled.img`
  width: 50px;
`;

export const ButtonGoBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 5%;
  margin-top: 25px;
`;

export const TextButton = styled.span`
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: white;
`;

export const WrappenFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const SubText = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-left: 15px;
`;

export const LinkDetails = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-left: 50px;
  text-decoration: none;

  &:hover,
  &:active {
    color: red;
  }
`;
