import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './style.css'

type Props = {
    movies:any
    setMovies: any
}

const Header: React.FC<Props> = props => {

    const [inputVal, setInputVal] = useState<string>('')

    const updateMovies = (search:string)=>{
        console.log("this is search", search)
        setInputVal(search)
        props.setMovies(props.movies.filter((movie:any) => movie.title.toLowerCase().includes(search)))
    }
    return (
        <div className="appHeader">
            <div className="menuItems">
                <div className="searchMovies">
                        <p>Movies</p>
                </div>
                <div className="viewBookings">
                        <p>Bookings</p>
                </div>
            </div>
            <form >
                <input onChange={e => updateMovies(e.target.value)}  name="search" placeholder="search movies"/>
            </form>
        </div>
    )
}

export default Header;