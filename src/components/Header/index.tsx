import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from '../Search'
import './style.css'
import { useLocation } from 'react-router-dom';
import MovieStore from '../../stores/MovieStore';


type Props = {
    movies:any
    setMovies: any

}

type FormData= {
    searchQuery: string;
}

let caption = ""

const Header: React.FC<Props>=(props)=> {
    const movieStore = useContext(MovieStore)
    const {currentUserName, setUsername, setUserToken} = movieStore;
    const { handleSubmit } = useForm<FormData>();
    const [state, setState]  = useState({
        s: "",
        results: [],
        selected: {}
    })
    let location = useLocation();

    const clearLocal = ()=>{
        setUserToken("")
        setUsername("Guest")
    }

    const signinSignup = (username:string) =>{
        if (username === "Guest"){
            caption ="Create an account or Login to manage all your bookings"
            return(
            <Link to="/auth">
                <p style={{ cursor: 'pointer' }}>Sign In/ Sign Up</p>
            </Link>
            )
        }else{
            caption = ""
            return(
            <Link to="/">
            <p onClick = {(e)=>{clearLocal()}} style={{ cursor: 'pointer' }}>Sign Out</p>
            </Link>
            )
        }
    }

    interface HandleNameChangeInterface {
        target: HTMLInputElement;
      }

    if (location.pathname === "/bookings"){
        const apiUrl = `${process.env.REACT_APP_API_URL}/booked`
    
        const handleInput = (e:HandleNameChangeInterface) =>{
        let s =e.target.value;
        setState(prevState => {
            return {... prevState, s: s}
        });
    }
    const onSubmitted =  handleSubmit(()=>{
        axios(apiUrl+"/"+state.s).then(({data})=>{
            props.setMovies(data)
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
                {signinSignup(currentUserName)}
                </div>
                <div className="user">
                    <p className = "userName">{currentUserName}</p>
                </div>
            </div>
            <Search placeholder={"enter booking identifier string e.g tt265412419"} handleInput={handleInput} onSubmitted={onSubmitted}/>
    <p className="altText">{caption}</p>
        </div>
    )
    } else {

        const apiUrl = `${process.env.REACT_APP_OMDBAPI}`
        
        
        const handleInput = (e:HandleNameChangeInterface) =>{
            let s =e.target.value;
            setState(prevState => {
                let results = props.movies.filter((movie:any) => movie.Title.toLowerCase().includes(s))
                props.setMovies(results)
                return {... prevState, s: s}
            });
        }
        
        const onSubmitted =  handleSubmit(()=>{
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
                {signinSignup(currentUserName)}
                </div>
                <div className="user">
                    <p className = "userName">{currentUserName}</p>
                </div>
            </div>
            <Search placeholder = {"search movie title...."} handleInput={handleInput} onSubmitted={onSubmitted}/>
        </div>
        )
    }
}
export default Header;