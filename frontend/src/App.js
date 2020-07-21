import React from 'react';

import logo from './assets/logo.png';

import Routes from './routes';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="e'Day" /> 
      <Routes />
    </div>
  );
}

export default App;
