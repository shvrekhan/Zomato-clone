import React, { Component } from 'react'
import "./HotelCard.css"

export default class HotelCard extends Component {
    render() {
        return (
            <>
                <div class="explore-card cur-point card-shadow">
                    <div class="explore-card-cover">
                        <img src={this.props.img}
                            alt={this.props.title}
                            class="explore-card-image" />

                        {this.props.delivery &&
                            <div class="delivery-time">19 min</div>
                        }

                    </div>
                    <div class="res-row">
                        <div class="res-name">{this.props.title}</div>
                        <div class="res-rating absolute-center">Rating -{this.props.rating}<i class="fi fi-sr-star absolute-center">
                        </i>
                        </div>
                    </div>
                    <div class="res-row">
                        <div class="res-cuisine">
                            <span class="res-cuisine-tag">{this.props.category}</span>

                        </div>
                        {this.props.delivery &&
                            <div class="res-price">₹{this.props.price} for one</div>}
                    </div>
                    <div>
                        <div class="card-separator">
                        </div>
                        {this.props.delivery &&
                            <div class="explore-bottom d-flex">
                                <img src="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png" alt="6325+ orders placed from here recently" className='growinggrapg-image' />
                                <div class="res-bottom-text">6325+ orders placed from here recently</div>
                            </div>}
                    </div>
                </div>
            </>
        )
    }
}
