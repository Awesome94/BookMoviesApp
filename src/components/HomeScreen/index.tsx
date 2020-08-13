import React from 'react';
import Movies from '../Movies';
import Header from '../Header';

const HomeScreen: React.FC=()=>{
    return(
        <div>
            <Header/>
            <Movies/>
        </div>
    )
}
export default HomeScreen;