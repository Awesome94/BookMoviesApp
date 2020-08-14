import React,{useState} from 'react';
import Movies from '../Movies';
import Header from '../Header';
import { useLocation } from 'react-router-dom';
import BookedMovies from '../Movies/BookedMovie';


type Movie = {
    imdbID: string
    title: string
    image: string
    year: string
  }

const HomeScreen: React.FC=()=>{
    const [movies, setMovies] = useState<Movie[]>([])
    const [tempMovies, setTempMovies] = useState<Movie[]>([])
    
    let location = useLocation();

    if(location.pathname === '/bookings'){
        return(
            <div>
                <Header movies={movies} setMovies={setTempMovies}/>
                <p>Welcome to bookings</p>
                <BookedMovies/>
            </div>
        )
    }else{

        return(
            <div>
            <Header movies setMovies/>
            <Movies movies={tempMovies} setMovies={setMovies} setTempMovies={setTempMovies} component = {Movies}/>
        </div>
    )
    }
}

export default HomeScreen;