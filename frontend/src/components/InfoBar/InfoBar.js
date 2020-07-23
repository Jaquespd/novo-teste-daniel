import React from 'react';

import {Container, Room, Buttom } from './styles';

const InfoBar = ({ room }) => (
  <Container>
    <Room>
      <h3>{room}</h3>
    </Room>
    <Buttom>
      <a href="/">s</a>
    </Buttom>
  </Container>
);

export default InfoBar;