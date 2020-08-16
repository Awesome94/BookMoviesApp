import { observable, action, computed, reaction } from "mobx"
import { createContext } from "react"

class MovieStore{

    @observable guestMovies: string[] = []

    @observable currentUserName: string="Guest"

    @observable userToken: string=""

    @action addMovieId = (identifier: string) => {
        this.guestMovies.push(identifier)
    }

    @action setUsername = (username:string) =>{
        this.currentUserName = username
    }

    @action setUserToken = (token:string)=>{
        this.userToken = token
    }

    @action clearGuestMovies = ()=>{
        this.guestMovies = []
    }
}

export default createContext(new MovieStore())