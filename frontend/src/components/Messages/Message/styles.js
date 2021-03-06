import styled from 'styled-components';

export const ContainerSend = styled.div`
  display: flex;
  padding: 0 5%;
  margin-top: 3px;
  justify-content: flex-end;
  
  > p {
    display: flex;
    align-items: center;
    font-family: Helvetica;
    color: #616362;
    letter-spacing: 0.3px;
    padding-right: 10px;
  }

  /* @media (max-width: 2560px) {
    font-size: 25px;
  } */
`;

export const MessageBoxSend = styled.div`
  background: #e5efc3;
  border-radius: 8px;
  padding: 5px 20px;
  color: #111;
  display: inline-block;
  max-width: 80%;
  margin-bottom: 12px;
  box-shadow:8px 8px 8px rgba(0,0,0,0.1);

  > p {
    width: 100%;
    letter-spacing: 0;
    float: left;
    font-size: 1.1em;
    word-wrap: break-word;
    padding-right: 10px;
  }

  /* @media (max-width: 2560px) {
    font-size: 25px;
  } */
`;

export const ContainerRecive = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 5%;
  margin-top: 3px;
  
  > p {
    display: flex;
    align-items: center;
    font-family: Helvetica;
    color: #616362;
    letter-spacing: 0.3px;
    padding-left: 10px;
  }

  /* @media (max-width: 2560px) {
    font-size: 25px;
  } */
`;

export const MessageBoxRecive = styled.div`
  background: #0376f5;
  border-radius: 8px;
  padding: 5px 20px;
  color: #FFF;
  display: inline-block;
  max-width: 80%;
  margin-bottom: 12px;
  box-shadow:8px 8px 8px rgba(0,0,0,0.1);

  > p {
    width: 100%;
    letter-spacing: 0;
    float: left;
    font-size: 1.1em;
    word-wrap: break-word;
    padding-right: 10px;
  }

  /* @media (max-width: 2560px) {
    font-size: 25px;
  } */
`;
