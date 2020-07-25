import React from 'react';

import LogoutIcon from '../../assets/logout.png';
import {Container, Room, Buttom } from './styles';

export default function InfoBar({ room }) {
  return (
    <Container>
      <Room> 
        <h3>{room}</h3> 
      </Room>
      <Buttom>
        <a href="/"><img src={LogoutIcon} alt="Swiftfox logo"/></a>
      </Buttom>
    </Container>
  )
};