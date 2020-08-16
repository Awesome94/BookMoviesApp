import React from 'react';

type Props = {
    handleInput: any;
    onSubmitted:any;
    placeholder:string;
}

const Search: React.FC<Props>=({handleInput, onSubmitted, placeholder})=>{
    return(
        <section className="searchbox-wrap">
            <form onSubmit={onSubmitted}> 
                <input 
                    type="text"
                    placeholder={placeholder}
                    className="searchbox"
                    onChange={handleInput}
                />
            </form>
        </section>
    )
}

export default Search;