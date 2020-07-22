import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
`;

export const Input = styled.div`
  display:flex;
  flex-direction: column;
  margin-bottom: 16px;
  
  > label {
    padding-bottom: 5px;
    color: #666;
    font-family: sans-serif;
    
  }

  > input {
    display: flex;
    font-size: 14px;
    height: 40px;
	  padding: 5px;
    width: 100%;
    border: 0;
    border-radius: 2px;
  }
  

`;
