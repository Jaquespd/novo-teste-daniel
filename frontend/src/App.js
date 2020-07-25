import React from 'react';

import Chat from '../src/Pages/Chat';
import Login from '../src/Pages/Login';
import GlobalStyles from './styles/Global';

import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/chat" component={Chat} />
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;
