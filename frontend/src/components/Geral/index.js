import React from 'react';
import logo from '../../assets/logo.png';

import { Container, Background } from './styles';
import Header from '../../components/Header';
import Main from '../../components/Main';

function Geral() {
  return (
    <Container>
      <Background />
      <img src={logo} alt="e'Day" /> 
      <Header />
      <Main />
    </Container>);
}

export default Geral;