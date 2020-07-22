import React from 'react';
import logo from '../../assets/logo.png';

import { Container, Form, Background } from './styles';
import Header from '../../components/Header';
import Main from '../../components/Main';

function Geral() {
  return (
    <Container>
      <Background>
      <Form>
        <img src={logo} alt="e'Day" /> 
        <Header />
        <Main />
      </Form>
      </Background>
    </Container>);
}

export default Geral;