import React, { Component } from 'react'
import HotelDescription from '../../Components/HotelDescription/HotelDescription';
import NavbarHotelPage from "../../Components/Navbar/NavbarHotelPage"

class RestaurantPage extends Component {
  render() {
    return (
      <>
        <NavbarHotelPage />
        {this.props.restaurant.map((current) => {
          if (current.id === this.props.match.params.id) {
            return <HotelDescription
              key={current.id}
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
export default RestaurantPage;