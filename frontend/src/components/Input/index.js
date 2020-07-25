import React from 'react';

import { Container, Button } from './styled';

export default function Input({ setMessage, sendMessage, message }) {
  return (
    <Container>
      <input
        className="input"
        autofocus="true"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <Button onClick={e => sendMessage(e)}> Send </Button>
    </Container>
  )
};

