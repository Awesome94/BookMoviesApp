import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from '../Search'
import './style.css'

type Props = {
    movies:any
    setMovies: any

}

type Movie = {
    imdbID: string
    title: string
    image: string
    year: string
  }

type FormData= {
    searchQuery: string;
}

const Header: React.FC<Props>=(props)=> {
    const { register, setValue, handleSubmit, errors } = useForm<FormData>();
    const [inputVal, setInputVal] = useState<string>('')
    const [tempMovies, setTempMovies] = useState<Movie[]>([])

    
    const [state, setState]  = useState({
        s: "",
        results: [],
        selected: {}
    })

    interface HandleNameChangeInterface {
        target: HTMLInputElement;
      }

    const updateMovies = (search:string)=>{
        console.log("this is search", search)
        setInputVal(search)
    }
    const apiUrl = `${process.env.REACT_APP_OMDBAPI}`
    
    const handleInput = (e:HandleNameChangeInterface) =>{
        let s =e.target.value;
        setState(prevState => {
            let results = props.movies.filter((movie:any) => movie.title.toLowerCase().includes(s))
            props.setMovies(results)
            return {... prevState, s: s}
        });
    }
    const onSubmitted =  handleSubmit(({searchQuery})=>{
        axios(apiUrl+"&s="+state.s).then(({data})=>{
            props.setMovies(data.Search)
        })
    })

    return (
        <div className="appHeader">
            <div className="menuItems">
                <div className="searchMovies">
                    <Link to="/">
                       <p style={{ cursor: 'pointer' }}>Movies</p>
                    </Link>
                </div>
                <div className="viewBookings">
                <Link to="/bookings">
                    <p style={{ cursor: 'pointer' }}>Bookings</p>
                </Link>
                </div>
                <div className="auth">
                <Link to="/">
                    <p style={{ cursor: 'pointer' }}>Sign In/up</p>
                </Link>
                </div>
                <div className="user">
                    <p>Hi Guest</p>
                </div>
            </div>
            <Search handleInput={handleInput} onSubmitted={onSubmitted}/>
        </div>
    )
}

export default Header;