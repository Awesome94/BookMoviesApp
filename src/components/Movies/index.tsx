import React, {useEffect, useState, useContext} from 'react';
import StoreContext from '../../App'
import Movie from './Movie';
import './style.css';
import {CircularProgress} from '@material-ui/core';

const API_KEY = process.env.REACT_APP_API_KEY;


type Props = {
    movies: any
    setMovies: any
    setTempMovies: any
}

type Movie = {
    imdbID: string
    Poster: string
    Title: string
    image: string
    Year: string
}

const initialValues  = ['Avengers', 'Bad', 'boys','candyman', 'super', 'term']

const Movies: React.FC<Props>=(props) => {
    useEffect(() => {
        const promises = initialValues.map(initialValues => {
            return fetch(` http://www.omdbapi.com?s=${encodeURIComponent(initialValues)}&apikey=${API_KEY}&page=1`)
            .then(res => res.json())
    })

    Promise.all(promises).then((movies:any) => {
       const updatedMovies:Movie[] = movies.map((movie: any)=> movie.Search).flat(2).map((movie: any)=> 
        ({
            Title: movie.Title,
            Year: movie.Year,
            Poster: movie.Poster,
            imdbID: movie.imdbID,
        }))

        props.setMovies(updatedMovies)
        props.setTempMovies(updatedMovies)
    })
},[])
    if(props.movies && props.movies.length === 0){
        return <div className="loader">
            <CircularProgress/>
        </div>
    }
    if(!props.movies){
        return <div className="loader">
           <h3>Oopsie, Sorry Movie not found</h3>
        </div>
    }else{
        return (
            <div className="movies">
                {props.movies.flat(2).map((movie: Movie, index:any)=> {
                    return <Movie
                    key={index}
                    title={movie.Title}
                    year={movie.Year}
                    image={movie.Poster}
                    imdbID={movie.imdbID}
                    />
                })
            }
        </div>
        )
    }
}
export default Movies;
