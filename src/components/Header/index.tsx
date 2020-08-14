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

type FormData= {
    searchQuery: string;
}

const API_KEY = '7440eff4';
const userID = 'tt3896198';

const Header: React.FC<Props>=props=> {
    const { register, setValue, handleSubmit, errors } = useForm<FormData>();
    const [inputVal, setInputVal] = useState<string>('')
    
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
        // setMovies(movies.filter((movie:any) => movie.title.toLowerCase().includes(search)))
    }
    const apiUrl = `http://www.omdbapi.com?apikey=${API_KEY}`
    
    const handleInput = (e:HandleNameChangeInterface) =>{
        let s =e.target.value;
        setState(prevState => {
            return {... prevState, s: s}
        });
    }
    const onSubmitted =  handleSubmit(({searchQuery})=>{
        axios(apiUrl+"&s="+state.s).then(({data})=>{
            console.log(data)
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
            </div>
            <Search handleInput={handleInput} onSubmitted={onSubmitted}/>
        </div>
    )
}

export default Header;