import React from 'react';
import './Searchbar.css';
const SearchBar = () => {
    return (
        <div className='searchcontainer'>
            <div className="search">
                <input id="searchbar" onkeyup="search_animal()" type="text" name="search" placeholder="Inserir codigo do projeto"></input><button>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;
