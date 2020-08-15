import React, { useState } from 'react';
import {Redirect, Router, Route, Switch} from 'react-router-dom';
import { history } from './helpers/history';
import HomeScreen from './components/HomeScreen';
import AuthComponent from './components/Authentication';

import './App.css';


const App: React.FC=()=>{
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path = "/auth" component={AuthComponent}/>
          <Route path="/"component = {HomeScreen}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
