// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import Home from './pages/home';
import Books from './pages/books';

import './App.sass';

const App = () => (
  <>
    <CssBaseline />
    <h1>My React Books App!</h1>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/books" exact component={Books} />
    </Switch>
  </>
);
export default App;
