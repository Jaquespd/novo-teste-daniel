import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  border-top: 1px solid #fff;
  height: 55px;
  
  > input {
    border: none;
    border-radius: 0 0 0 4px;
    width: 80%;
    font-size: 1.2em;
    background-color: #c7a2a33f;
    outline: none;
    padding: 15px;
    font-size: 16px;

    @media (max-width: 768px) {
      border-top: 0; 
    }

    @media (max-width: 425px) {
      background-color: rgba(0, 0, 0, 0.13);
      border-radius: 30px 0 0 30px ;
      margin-left: 10px;
    }
  }
  
  @media (max-width: 425px) {
    margin-bottom: 10px;
    border-top: none; 
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  background: #991a1d;
  border-radius: 0 0 4px 0;
  border: 0;
  width: 20%;
  transition: background-color 0.2s;
  
  
  cursor: pointer;

  &:hover {
    background: ${shade(0.2, '#991a1d')};
  }

  @media (max-width: 425px) {
    border-radius: 0px 30px 30px 0px ;
    margin-right: 10px;
  } 
`;