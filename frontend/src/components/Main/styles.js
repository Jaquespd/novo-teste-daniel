import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 40px;
  background: var(--dark-color-b);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  
  > p {
    margin-bottom: 20px;
  }

  > label {
    display: block;
	  margin-bottom: 5px;
  }

  > input {
    font-size: 16px;
	  padding: 5px;
	  height: 40px;
    width: 100%;
    border: 0;
    border-radius: 2px;
  }

`;
