import React, { Component } from 'react'
import "./SearchBar.css"

class SearchBar extends Component {
    render() {
        return (
            <>
                <div className='search-bar-container d-flex flex-wrap align-self-center pb-5'>
                    <div className='location-input-container d-flex'>
                        <div className='fa-sharp fa-solid fa-location-dot fa-2x location-icon-custom-css'></div>
                        <input placeholder='Bengaluru' className='location-input' />
                        <div className='fa-solid fa-caret-up  triangle-icon-custom-css'></div>
                    </div>
                    <div className='search-input-container d-flex'>
                        <div className='fa-solid fa-magnifying-glass  search-icon-custom-css'></div>
                        <input placeholder='Search for restaurant, cuisine or a dish' className='search-input' />
                    </div>
                </div>
            </>
        )
    }
}

export default SearchBar;