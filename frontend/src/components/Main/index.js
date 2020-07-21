import React from 'react';

import { Container } from './styles';
import Button from '../../components/Button';
import Form from '../../components/Form';

function Main() {
  return (
    <Container>
      <Form />
			<Button>Chat</Button>
    </Container>
    );
}

export default Main;