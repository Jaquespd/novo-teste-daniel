import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

import { Container, Main } from './styles';

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Container>
      <img src={logo} alt="Swiftfox logo" /> 
      <Main>
        <h1>Swiftfox Chat</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </Main>
    </Container>
  );
}
