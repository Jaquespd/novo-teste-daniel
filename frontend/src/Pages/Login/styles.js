import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/background.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background: url(${background}) no-repeat bottom;

  > img {
    width: 280px;
    height: 180px;
    margin-top: -130px;
  }

  @media (max-width: 426px) {
    img {
      width: 230px;
      height: 150px;
      margin-top: -130px;
    }
  }
  
  @media (max-width: 320px) {
    img {
      width: 200px;
      height: 130px;
      margin-top: -130px;
    }
  }
`;

export const Main = styled.div`
  width: 25%;
  background-color: #00000023;
  border-radius: 8px;
  box-shadow: 20px 30px 30px rgba(0,0,0,0.4);

  > h1 {
    color: rgb(255, 255, 255);
    background-color: #991a1d;
    font-size: 2em;
    margin-top: 0;
    padding: 10px;
    border-radius: 8px 8px 0 0;
  }

  @media (max-width: 1025px) {
    width: 35%;
  }

  @media (max-width: 769px) {
    width: 45%;
  }

  @media (max-width: 426px) {
    width: 70%;
  }
`;

export const Imput = styled.div`

  > input {
    border-radius: 4px;
    border: 0;
    padding: 15px 20px;
    width: 90%;
    outline: none;
    margin-top: 16px;
  }

  > label {
    background:green;
    margin-top: 10px;
  }
`;

export const Buttom = styled.div`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: #0376f5;
  padding: 16px;
  border-radius: 4px;
  display: inline-block;
  outline: none;
  border: none;
  width: 90%;
  margin-bottom: 20px;
  margin-top: 20px;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#0376f5')};
  }
`;
