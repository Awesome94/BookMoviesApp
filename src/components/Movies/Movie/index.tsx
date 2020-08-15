import React, {useState} from 'react';
import BookMovieModal  from '../MovieModal';
import './style.css'

type Props = {
    title: string;
    year: string;
    image: string;
    imdbID: string;

}

const Movie: React.FC<Props>=(props)=> {
    return (<div className="movie">
        <div className="movieTitle">
            <h3>{props.title}</h3>
        </div>
        <div className="poster">
            <img src={props.image}/>
        </div>
        <div>
            <h3>{props.year}</h3>
        </div>
        <div className="bookButton">
              <BookMovieModal movieId={props.imdbID}/>
        </div>
    </div>
    );
};

export default Movie;