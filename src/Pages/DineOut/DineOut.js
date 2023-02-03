import React, { Component } from 'react'
import HotelCard from '../../Components/HotelCard/HotelCard';
import NavbarHotelPage from '../../Components/Navbar/NavbarHotelPage';

class DineOut extends Component {
    render() {
        return (
            <>
                <NavbarHotelPage />
                <div className='container'>
                    <h1 className='mt-5'>Best {this.props.hotelType} in Bengaluru</h1>
                    <div className='d-flex container flex-wrap hotels-container'>
                        {this.props.dineOut.map((current) => {
                            return <HotelCard
                                img={current.info.image.url}
                                title={current.info.name}
                                rating={current.info.rating.aggregate_rating}
                                delivery={false}    
                            />
                        })}
                    </div>

                </div>


            </>
        )
    }
}
export default DineOut;