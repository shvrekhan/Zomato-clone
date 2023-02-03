import React from "react";
import "./Header.css"
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

class Header extends React.Component {
    

    render() {
        return (
            <>
                <div className="head-container container-fluid d-flex flex-column">
                    <Navbar />
                    <div className="zomato-image-section d-flex align-self-center">
                        <img className="zomato-center-image "
                            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" />
                    </div>
                    <div className="head-info-section">
                        <h1>Discover the best food & drinks in Bengaluru</h1>
                    </div>
                    <SearchBar />

                </div>
            </>
        )
    }
}

export default Header;