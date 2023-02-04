import React, { Component } from 'react'
import HotelCard from '../../Components/HotelCard/HotelCard'
import NavbarHotelPage from "../../Components/Navbar/NavbarHotelPage"
import Dish from "../../Components/Dish/Dish"
import { Link } from 'react-router-dom'

export default class SearchDish extends Component {
    render() {
        return (
            <>
                <NavbarHotelPage />
                {console.log(this.props.restaurant, "okk")}
                {console.log(this.props.match.params.dish, "po")}
                <div className='d-flex container flex-wrap'>
                    {this.props.restaurant.map((current) => {
                        if (current.title === this.props.match.params.dish ||
                            current.title.includes(this.props.match.params.dish
                            )) {
                            return (<Link to={"/restaurant/" + current.id}>
                                <HotelCard
                                    key={current.id}
                                    img={current.imgUrl}
                                    title={current.title}
                                    category={current.category}
                                    rating={current.rating}
                                    price={current.price}
                                    delivery={true}
                                /></Link>
                            )
                        }
                    })}

                    {this.props.restaurant.reduce((acc, current) => {
                        current.items.map((currentDish) => {
                            if (currentDish.title.includes(this.props.match.params.dish)) {
                                acc.push(<Link to={"/restaurant/" + current.id}>
                                    <HotelCard
                                        key={current.id}
                                        img={current.imgUrl}
                                        title={current.title}
                                        category={current.category}
                                        rating={current.rating}
                                        price={current.price}
                                        delivery={true}
                                    />
                                </Link>)
                            }
                            return acc;
                        })
                        return acc;
                    }, [])}


                </div>

            </>
        )
    }
}
