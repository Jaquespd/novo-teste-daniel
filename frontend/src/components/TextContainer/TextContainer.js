import React from 'react';
import logo from '../../assets/logo.png';

import isi from '../../assets/user.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div className="test">
    <img src={logo} alt="Swiftfox logo" /> 
      <h1>Swiftfox Chat</h1>
    </div>
    {
      users
        ? (
          <div className="test2">
            <h1><img src={isi} alt="Swiftfox logo" /> Users</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
      : null
    } 
  </div>
);

export default TextContainer;