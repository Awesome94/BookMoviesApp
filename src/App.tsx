import React, { useState } from 'react';
import {Redirect, Router, Route, Switch} from 'react-router-dom';
import { history } from './helpers/history';
import HomeScreen from './components/HomeScreen';
import AuthComponent from './components/Authentication';
import Booking from './components/BookingScreen';
import axios from 'axios';

import './App.css';

// const token = localStorage.getItem('token')

// axios.defaults.headers.common = {
//   'Authorization': 'Bearer ' + token
// };

const App: React.FC=()=>{
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path = "/auth" component={AuthComponent}/>
          <Route path = "/register" component={AuthComponent}/>
          <Route path="/bookings" component = {Booking}/>
          <Route path="/" component = {HomeScreen}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
