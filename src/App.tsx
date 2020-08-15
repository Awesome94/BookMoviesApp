import React, { useState } from 'react';
import Header from './components/Header';
import Movies from './components/Movies';
import {Redirect, Router, Route, Switch} from 'react-router-dom';
import { history } from './helpers/history';
import HomeScreen from './components/HomeScreen';
import SignInComponent from './components/Authentication/Login/signInComponent';

import './App.css';


const App: React.FC=()=>{
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path = "/auth" component={SignInComponent}/>
          <Route path="/"component = {HomeScreen}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
