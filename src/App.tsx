import React from 'react';
import Header from './components/Header'
import Movies from './components/Movies'
import './App.css';

function App() {
  return (
    <div className="App">
     <Header movies={movies}/>
     <Movies movies={movies} setMovies={setMovies}/>
    </div>
  );
}

export default App;
