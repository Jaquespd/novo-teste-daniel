import React from 'react';

import Chat from '../src/Pages/Chat/Chat';
import Login from '../src/Pages/Login/Login';
import GlobalStyles from './styles/Global';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/chat" component={Chat} />
      <GlobalStyles/>
    </Router>
  );
}

export default App;
