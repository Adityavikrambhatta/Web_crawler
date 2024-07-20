import React from 'react';
import useStore from '../store';
import '../styles/_searchBar.scss'

const SearchBar = ({handleCrawl})=>{

    const { url, isCrawling, setUrl } = useStore();
    return(

        <div className="input-wrapper">
            <input type="text"  placeholder='Web Crawl URL ' value = {url} onChange = {(e)=>setUrl(e.target.value)} />
            <button type="submit" onClick={handleCrawl}  disabled={isCrawling || !url}>
                {isCrawling ? <i className="fa-solid fa-circle-up large-2x"  disabled/> : <i className="fa-solid fa-circle-up large-2x" />}
                 
            </button>
        </div>
    )
}


export default SearchBar;
