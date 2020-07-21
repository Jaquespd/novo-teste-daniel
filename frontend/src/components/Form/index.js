import React from 'react';

import { Container, Input } from './styled';

function Form() {
  return (
    <Container>
      <Input>
        <label>Username</label>
        <input type="text" name="username" placeholder="Name" required/>
      </Input>
			<Input>
        <label>Room</label>
        <input type="text" name="username" placeholder="Name" required/>
      </Input>		
    </Container>
  );
}

export default Form;