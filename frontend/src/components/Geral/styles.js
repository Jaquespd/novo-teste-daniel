import styled from 'styled-components';

import background from '../../assets/background.png';

export const Container = styled.div`
  max-width: 400px;
	margin: 200px auto;
	color: #f5f5f5;
	margin-top: 10px;
`;

export const Background = styled.div`
	flex: 1;
	background: url(${background}) no-repeat center;
`;