import styled from 'styled-components';

import background from '../../assets/background.png';

export const Container = styled.div`
	width:100%;
	height: 100vh;
`;

export const Form = styled.div`
  max-width: 400px;
	margin: 200px auto;
	color: #f5f5f5;
	flex: 1;
	margin-top: 10px;
`;


export const Background = styled.div`
	width:100%;
	height: 100vh;
	background: url(${background}) no-repeat bottom;
`;