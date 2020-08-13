import React, { useState } from 'react';
import Header from './components/Header';
import Movies from './components/Movies';
import './App.css';

type Movie = {
  imdbID: string
  title: string
  image: string
  year: string
}

const App: React.FC=()=>{
  const [movies, setMovies] = useState<Movie[]>([])
  const [tempMovies, setTempMovies] = useState<Movie[]>([])

  return (
    <div className="App">
     <Header movies={movies} setMovies={setTempMovies}/>
     <Movies movies={tempMovies} setMovies={setMovies} setTempMovies={setTempMovies}/>
    </div>
  );
}

export default App;
