import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Container, Input } from './styled';
import Button from '../../components/Button';

const Form = () => {
  const [name, setName] =  useState('');
  const [room, setRoom] =  useState('');

  return (
    <Container>
      <Input>
        <label>Username</label>
        <input 
          type="text" 
          name="username" 
          placeholder="Name" 
          required 
          onChange={(event) => setName(event.target.value)}
        />
      </Input>

			<Input>
        <label>Room</label>
        <input 
          type="text" 
          name="username" 
          placeholder="Name" 
          required 
          onChange={(event) => setRoom(event.target.value)}
        />
      </Input>

      <Link 
        Onclick={event => (!name || room) ? event.preventDefault() : null} 
        to={`/chat?name=${name}&room=${room}`}>
        <Button>Chat</Button>
      </Link>
    </Container>
  );
}

export default Form;