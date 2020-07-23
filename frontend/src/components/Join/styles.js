import styled from 'styled-components';

import background from '../../assets/background.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background: url(${background}) no-repeat bottom;
`;

export const Main = styled.div`
  width: 25%;
  background-color: #00000023;
  border-radius: 8px;

  > h1 {
  color: rgb(255, 255, 255);
  background-color: #991a1d;
  font-size: 2em;
  margin-top: 0;
  padding: 10px;
  border-radius: 8px 8px 0 0;
  
}
`;

