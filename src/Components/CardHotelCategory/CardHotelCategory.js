import React, { Component } from 'react'
import "./CardHotelCategory.css"

class CardHotelCategory extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div class="card card-hotelcategory" >
                    {/* {console.log(this.props.img)} */}
                    <img class="card-img-top image-card" src={this.props.img} alt="Card image cap" />
                    <div class="card-body">
                        <span class="card-text">{this.props.heading}</span>
                        <p>{this.props.subHead}</p>
                    </div>
                </div>
            </>
        )
    }

}
export default CardHotelCategory;