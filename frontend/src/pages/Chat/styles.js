import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  margin: -20px;  
`;

export const Header = styled.div`
  background: var(--dark-color-a);
	color: #fff;
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Main = styled.div`
  display: grid;
	grid-template-columns: 1fr 3fr;
`;

export const Sidebar = styled.div`
  background: var(--dark-color-b);
	color: #fff;
	padding: 20px 20px 60px;
  overflow-y: scroll;
  
  > h2 {
    font-size: 20px;
    background: rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 20px;
  }

  > h3 {
	  margin-bottom: 15px;
  }

  > ul li {
	  padding: 10px 0;
  }
`;

export const Chating = styled.div`
  padding: 30px;
	height: 642px;
	overflow-y: scroll;
`;

export const Message = styled.div`
  padding: 10px;
	margin-bottom: 15px;
	background-color: var(--light-color);
  border-radius: 5px;
  
  > span {
	  color: #777
}
`;

export const Form = styled.div`
  padding: 20px 30px;
  background-color: var(--dark-color-a);
  
  > form {
	  display: flex;
  }
`;

export const Input = styled.div`
  font-size: 16px;
  padding: 5px;
  height: 40px;
  flex: 1;
`;


