import React from 'react';
import Navbar from './../components/Navbar';
import SearchBar from './../components/Searchbar';
import Projetos from './../components/Projetos';
import './defalt.css';

const Shop = () => {
    return (
        <div>
            <Navbar />
            <SearchBar />
            <Projetos />
        </div>
    )
}

export default Shop;
