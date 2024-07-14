import React from 'react';
import useStore from '../store';

const SearchBar = ()=>{
    var { prompt_response, search } = useStore()
    return(
        <div className='search-div'>
            <input className='search-div-inp' type="text" value = {prompt_response} onChange = {(e)=>search(e.target.value)}/>
        </div>
    )
}


export default SearchBar;
