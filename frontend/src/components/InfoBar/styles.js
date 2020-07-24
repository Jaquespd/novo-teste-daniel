import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #991a1d;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: 100%;

  @media (max-width: 768px) {
    border-radius: 0;
  }

  @media (max-width: 425px) {
      margin-top: -10px;
    }

`;

export const Room = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 3%;
  color: white;
`;

export const Buttom = styled.button`
  display: flex;
  margin-right: 3%;
  text-decoration: none;
  background: #FFF;
  border: 0;
  border-radius: 50%;
  width: 30px;
  height:30px;

  > a {
    text-decoration: none;

    > img {
      height: 15px;
      width: 15px;
      opacity: 0.7;
      margin-top: 7px;
      margin-left: 2px;
    }
  }
`;
