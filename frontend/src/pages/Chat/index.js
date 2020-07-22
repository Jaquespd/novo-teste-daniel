import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import { Container, Header, Main, Sidebar, Chating, Message, Form } from './styles';

let socket;

const Chat = ({ location }) => {
  const [name, setName] =  useState('');
  const [room, setRoom] =  useState('');
  const ENDPOINT = 'localhost:3333';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    console.log(socket);

    socket.emit('join', { name, room });
    
    return() => {
      socket.emit('disconnect');
      socket.off();
    }
  } ,[ENDPOINT, location.search]);


  return (
    <Container>
      <Header>
        <h1>Swiftfox Chat</h1>
        <a href="index.html" class="btn">Leave Room</a>
      </Header>
      <Main>
        <Sidebar>
          <h3>Room</h3>
          <h2 id="room-name">JavaScript</h2>
          <h3>Users</h3>
          <ul id="users">
            <li>Daniel Simões</li>
            <li>Tamy Simões</li>
          </ul>
        </Sidebar>
        <Chating>
            <Message>
              <p>Daniel Simões <span>19:12pm</span></p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                repudiandae.
              </p>
            </Message>
            <Message>
              <p>Tamy Simões <span>19:15pm</span></p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                repudiandae.
              </p>
            </Message>
        </Chating>
      </Main>
      <Form>
        <form id="chat-form">
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autocomplete="off"
          />
          <button class="btn"> Send</button>
        </form>
      </Form>
    </Container>
  );
}

export default Chat;