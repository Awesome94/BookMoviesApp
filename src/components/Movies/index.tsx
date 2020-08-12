import React, {useEffect, useState} from 'react'
import Movie from './Movie';
import './style.css'

const API_KEY = '7440eff4';
const userID = 'tt3896198';

const serirs  = ['avenger', 'iron man']

const Movies: React.FC = props => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const promises = series.map(series => {
            fetch(` http://www.omdbapi.com?stt3896198&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(res => console.log(res))
    })

    Promise.all(promises).then((movies:any) => {

    const upadatedMovies: Movie[] = movies.map((movie:any)=> movie.Search).flat(2).map((
        movie: any
    )=> ({
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster,
    }))

    props.setMovies(upadatedMovies)
    props.setTempMovies(updatedMovies)
})
},[])
    if(props.movies.length === 0){
        return <div className="loader">
            <CircularProgress/>
        </div>
    }

    return <div className="movies">
        {props.movies.map((movie: Movie)=> {
            return <Movie
                        key={movie.imdbID}
                        title={movie.title}
                        year={movie.year}
                        image={movie.Poster}
                    />
        })
    }
    </div>

export default Movies;
