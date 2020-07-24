import styled from 'styled-components';
import background from '../../assets/Untitled.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${background}) no-repeat top;


`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background:rgba(219, 130, 130, 0.089);
  border-radius: 4px 4px 4px 4px ;
  height: 60%;
  width: 35%;
  box-shadow: -40px 40px 30px rgba(0, 0, 0, 0.2);

  @media (min-width: 320px) and (max-width: 480px) {
  .outerContainer {
    height: 100%;
  }

  .container {
    width: 100%;
    height: 100%;
  }


  @media (min-width: 480px) and (max-width: 1200px) {
    .container {
      width: 60%;
    }
  }
}
`;

