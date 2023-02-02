import React, { Component } from 'react'
import HotelCard from '../../Components/HotelCard/HotelCard'
import NavbarHotelPage from "../../Components/Navbar/NavbarHotelPage"
import { Link } from 'react-router-dom'

export default class SearchDish extends Component {
    render() {
        return (
            <>
                <NavbarHotelPage />
                {console.log(this.props.restaurant)}
                {console.log(this.props.match.params.dish)}
                <div className='d-flex container flex-wrap'>
                    {this.props.restaurant.map((current) => {
                        if (current.title === this.props.match.params.dish) {
                            return (<Link to={"/restaurant/" + current.id}>
                                <HotelCard
                                    key={current.id}
                                    img={current.imgUrl}
                                    title={current.title}
                                    category={current.category}
                                    rating={current.rating}
                                    price={current.price}
                                /></Link>)
                        }
                    })}
                </div>

            </>
        )
    }
}
