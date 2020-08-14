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



const Movies: React.FC=() => {
    const [movies, setMovies] = useState<Movie[]>([])
    // const [tempMovies, setTempMovies] = useState<Movie[]>([])

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
        Poster: movie.Poster

    }))

        setMovies(updatedMovies)
        // setTempMovies(updatedMovies)
    })
},[])
    if(movies.length === 0){
        return <div className="loader">
            <CircularProgress/>
        </div>
    }

    return <div className="movies">
        {movies.map((movie: Movie)=> {
            return <Movie
                        key={movie.imdbID}
                        title={movie.title}
                        year={movie.year}
                        image={movie.Poster}
                    />
        })
    }
    </div>
}
export default Movies;
