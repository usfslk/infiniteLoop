import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Container, } from 'semantic-ui-react'
import './App.css';

import Home from './routes/Home';
import Account from './routes/Account';

const App = () => (
  <Router>
  <div>
    <div id='mainHeader'>
      <Button secondary href='/'>Home</Button>
      <Button secondary href='/account'>Account</Button>
  </div>
        <Route exact path="/" component={Home} />
        <Route path="/Account" component={Account} />
  </div>
</Router>
);






export default App;
