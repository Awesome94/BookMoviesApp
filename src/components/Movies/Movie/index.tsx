import React from 'react';
import {Button} from '@material-ui/core';
import './style.css'

type Props = {
    title: string
    year: string
    image: string
}

const onClickButton = ()=>{
    alert("booked")
}

const Movie: React.FC<Props> = props => {
    return <div className="movie">
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
            <Button onClick={(e)=>onClickButton()} variant="outlined" color="secondary">Book Movie</Button>
        </div>
    </div>
}

export default Movie;