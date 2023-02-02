import React, { Component } from 'react'
import "./HotelDescription.css"

export default class HotelDescription extends Component {
    render() {
        return (
            <>
                <div className='container d-flex flex-column'>
                    <div className='d-flex images-container gap-1 image-container-width'>
                        <img className='w-75 p-1 cover' src={this.props.current.imgUrl} />
                        <div className='d-flex flex-column w-25 mh-100 cover'>
                            {this.props.current.items.map((currentItem) => {
                                return <img src={currentItem.imgUrl} className="w-100 h-50 p-1" />
                            })}
                        </div>
                    </div>
                    <h2 className='hotel-name'>
                        {this.props.current.title}
                    </h2>

                    <h3 className='hotel-cuisine-type'>
                        {this.props.current.category[0]}
                    </h3>

                    <h4>
                        {this.props.current.location}
                    </h4>

                    <div className='hotel-list'>
                        <h3>Our Dishes</h3>

                        <div className='d-flex justify-content-center'>
                            {this.props.current.items.map((currentDish) => {
                                return (
                                    <div class="card d-flex" style={{ maxWidth: "18rem" }}>
                                        <img class="card-img-top" src={currentDish.imgUrl} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">{currentDish.title}</h5>
                                            <p class="card-text">{currentDish.description}</p>
                                            <a href="#" class="btn btn-primary">Add to cart</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>

            </>
        )
    }
}
