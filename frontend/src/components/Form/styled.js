import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
`;

export const Input = styled.div`
  display:flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  > label {
    padding-bottom: 5px;
    
  }

  > input {
    display: flex;
    font-size: 16px;
	  padding: 5px;
	  height: 40px;
    width: 100%;
    border: 0;
    border-radius: 2px;
  }
  

`;
