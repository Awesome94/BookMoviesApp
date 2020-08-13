import React from 'react';
import {Button} from '@material-ui/core';
import './style.css'

// type Props = {
//     title: string
//     year: string
//     image: string
// }

const BookedMovies: React.FC=() => {
    return <div className="Bookedmovies">
        <div className="">
            <h3>The Terminator</h3>
        </div>
        <div className="BookedPoster">
            <img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"/>
        </div>
        <div className="">
        <div className="summary">
            <p>The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.</p>
        </div>
        </div>
    </div>
}

export default BookedMovies;