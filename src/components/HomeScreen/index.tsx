import React,{useState, useEffect} from 'react';
import Movies from '../Movies';
import Header from '../Header';

type Movie = {
    imdbID: string;
    title: string;
    image: string;
    year: string;
    summary:string;
    tickets:number;
  }


const HomeScreen: React.FC=()=>{
    const [movies, setMovies] = useState<Movie[]>([])
    const [tempMovies, setTempMovies] = useState<Movie[]>([])
    
    return(
        <div>
            <Header movies={movies} setMovies={setTempMovies}/>
            <Movies movies={tempMovies} setMovies={setMovies} setTempMovies={setTempMovies}/>
        </div>
    )
}

export default HomeScreen;