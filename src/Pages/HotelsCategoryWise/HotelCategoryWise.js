import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import HotelCard from '../../Components/HotelCard/HotelCard'
import NavbarHotelPage from '../../Components/Navbar/NavbarHotelPage'
import RoundCard from '../../Components/RoundCard/RoundCard'
import "./HotelCategoryWise.css"

class HotelCategoryWise extends Component {
    render() {
        return (
            <>
                <NavbarHotelPage />
                <div className='container'>

                    <h3 className='top-brand-heading'>Top Brands for you</h3>
                    <div className='d-flex justify-content-around'>
                        {this.props.topHotels.map((current) => {

                            return <RoundCard
                                key={current.id}
                                img={current.cover}
                                title={current.name}
                                time={current.time} />
                        })}
                    </div>

                    <h1 className='mt-5'>Delivery Restaurants in Bengaluru</h1>
                    <div className='d-flex container flex-wrap hotels-container'>
                        {this.props.hotels.map((current) => {
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
                        })}
                    </div>
                </div>

            </>
        )
    }
}


const mapStoreToProps = (stateInStore) => {
    return {
        hotels: stateInStore.hotels.hotels,
        topHotels: stateInStore.topHotels.topHotels,

    }
}

export default connect(mapStoreToProps, {})(HotelCategoryWise);