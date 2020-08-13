import React from 'react';
import Movies from '../Movies';
import Header from '../Header';
import { useLocation } from 'react-router-dom';
import BookedMovies from '../Movies/BookedMovie';


const HomeScreen: React.FC=()=>{
    let location = useLocation();

    if(location.pathname === '/bookings'){
        return(
            <div>
                <Header movies setMovies/>
                <p>Welcome to bookings</p>
                <BookedMovies/>
            </div>
        )
    }else{

        return(
            <div>
            <Header movies setMovies/>
            <Movies/>
        </div>
    )
    }
}

export default HomeScreen;