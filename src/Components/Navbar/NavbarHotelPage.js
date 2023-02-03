import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import SignUp from '../SignUp/SignUp';

class NavbarHotelPage extends Component {
    render() {
        return (
            <>
                <nav class="navbar d-flex">
                    <a class="navbar-brand">
                        <Link to="/">
                            <img
                                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                                width="130"
                                height="30"
                                alt="" />
                        </Link>
                    </a>

                    {/* <div className='search-bar-container d-flex  shadow-search'>
                        <div className='location-input-container d-flex'>
                            <div className='fa-sharp fa-solid fa-location-dot fa-2x location-icon-custom-css'></div>
                            <input placeholder='Bengaluru' className='location-input' />
                            <div className='fa-solid fa-caret-up  triangle-icon-custom-css'></div>
                        </div>
                        <div className='search-input-container d-flex'>
                            <input
                                placeholder='Search for restaurant, cuisine or a dish'
                                className='search-input'
                                onChange={this.handelSearch} />
                            <Link to={"/search/" + this.props.searchInput}><div className='fa-solid fa-magnifying-glass  search-icon-custom-css'></div></Link>
                        </div>
                    </div> */}
                    <SearchBar />
                    <SignUp blackColor={true} />
                    <Link to="/cart"><span>Cart</span></Link>

                </nav>

            </>
        )
    }
}

export default NavbarHotelPage;