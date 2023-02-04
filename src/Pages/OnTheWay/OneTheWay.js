import React, { Component } from 'react'
import NavbarHotelPage from "../../Components/Navbar/NavbarHotelPage"
import "./OneTheWay.css"

class OneTheWay extends Component {
    render() {
        return (
            <>
                <NavbarHotelPage />
                <div className='container'>
                    <h2 className='your-order'>Your Order on the way...</h2>
                    <img src="https://entrackr.com/storage/2019/02/zomato.jpg" />
                </div>
            </>
        )
    }
}

export default OneTheWay;