import React,{useState, useEffect} from 'react';
import Header from '../Header';
import { useLocation } from 'react-router-dom';
import BookedMovies from '../Movies/BookedMovie';
import axios from 'axios';


type Movie = {
    imdbID: string;
    title: string;
    image: string;
    year: string;
    summary:string;
    tickets:number;
  }

  const Booking: React.FC=()=>{
    const [bookedMovie, setBookedMovie] =useState<Movie[]>([])
    const [selectedMovie, setselectedMovie] =useState<Movie[]>([])

    
  
    return(
        <div>
            <Header movies={bookedMovie} setMovies={setselectedMovie}/>
            <BookedMovies bookedMovie={selectedMovie} setBookedMovie={setBookedMovie} setselectedMovie={setselectedMovie}/>
        </div>
    )
}

export default Booking;