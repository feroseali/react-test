import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import SignUp from './components/SignUp'
import Login from './components/Login'



export default (
  <Router history={hashHistory}>
    <Route path="/" name="SignUp">
      <IndexRoute component={SignUp} />
    </Route>
    <Route path="/login/" name="Login">
      <IndexRoute component={Login} />
    </Route>
  </Router>
);
