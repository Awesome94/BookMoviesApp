import React, { useState } from 'react';
import Header from './components/Header';
import Movies from './components/Movies';
import {Redirect, Router, Route, Switch} from 'react-router-dom';
import { history } from './helpers/history';
import HomeScreen from './components/HomeScreen';

import './App.css';

const App: React.FC=()=>{
  return (
    <Router history={history}>
      <Switch>
      <div className="App">
         {/* <Header movies={movies} setMovies={setTempMovies}/> */}
         <Route path="/"component = {HomeScreen}/>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
