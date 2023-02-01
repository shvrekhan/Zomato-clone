import React, { Component } from 'react'
import "./CardHotelCategory.css"

class CardHotelCategory extends Component {
    render() {
        return (
            <>
                <div class="card card-hotelcategory mb-5" >
                    <img class="card-img-top image-card" src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Card image cap" />
                    <div class="card-body">
                        <span class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</span>
                    </div>
                </div>
            </>
        )
    }
}
export default CardHotelCategory;