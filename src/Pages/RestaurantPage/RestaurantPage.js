import React, { Component } from 'react'
import HotelDescription from '../../Components/HotelDescription/HotelDescription';
import NavbarHotelPage from "../../Components/Navbar/NavbarHotelPage"

export default class RestaurantPage extends Component {
  render() {
    return (
      <>
        <NavbarHotelPage />
        {this.props.restaurant.map((current) => {
          if (current.id === this.props.match.params.id) {
            return <HotelDescription
              title={current.title}
              img={current.imgUrl}
              items={current.item}
              current={current} />
          }
        })}
      </>

    )
  }
}
