import React from 'react';
import { useForm } from "react-hook-form";


type Props = {
    handleInput: any;
    onSubmitted:any;
}

const Search: React.FC<Props>=({handleInput, onSubmitted})=>{
    return(
        <section className="searchbox-wrap">
            <form onSubmit={onSubmitted}> 
                <input 
                    type="text"
                    placeholder="search for a movie..."
                    className="searchbox"
                    onChange={handleInput}
                />
            </form>
        </section>
    )
}

export default Search;