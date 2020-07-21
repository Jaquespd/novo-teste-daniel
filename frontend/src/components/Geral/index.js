import React from 'react';

import logo from '../../assets/logo.png';

import { Container } from './styles';
import Header from '../../components/Header';
import Main from '../../components/Main';

function Geral() {
  return (
    <Container>
      <img src={logo} alt="e'Day" /> 
      <Header />
      <Main />
    </Container>);
}

export default Geral;