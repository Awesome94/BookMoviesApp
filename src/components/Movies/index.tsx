import React, {useEffect, useState} from 'react'
import Movie from './Movie/index';
import './style.css';
import {CircularProgress} from '@material-ui/core';

const API_KEY = '7440eff4';
const userID = 'tt3896198';


type Props = {
    movies: any
    setMovies: any
    setTempMovies: any
}

type Movie = {
    imdbID: string
    Poster: string
    title: string
    image: string
    year: string
}

const initialValues  = ['Avengers', 'iron man', 'spider','man', 'super', 'term']

const Movies: React.FC<Props>=(props) => {

    useEffect(() => {
        const promises = initialValues.map(initialValues => {
            return fetch(` http://www.omdbapi.com?s=${encodeURIComponent(initialValues)}&apikey=${API_KEY}&page=1`)
            .then(res => res.json())
    })

    Promise.all(promises).then((movies:any) => {
       const updatedMovies:Movie[] = movies.map((movie: any)=> movie.Search).flat(2).map((movie: any)=> 
        ({
        title: movie.Title,
        year: movie.Year,
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
                    title={movie.title}
                    year={movie.year}
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
