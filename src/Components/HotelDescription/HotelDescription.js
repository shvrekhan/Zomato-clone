import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/action'
import Dish from '../Dish/Dish'
import "./HotelDescription.css"

class HotelDescription extends Component {
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

                        <div className='d-flex flex-column justify-content-center'>
                            {console.log(this.props.current.items, "sdjsdkfs")}
                            {this.props.current.items.map((currentDish, index) => {
                                return (
                                    <Dish
                                        key={currentDish.id}
                                        index={index}
                                        id={currentDish.id}
                                        img={currentDish.imgUrl}
                                        title={currentDish.title}
                                        description={currentDish.description}
                                        current={currentDish}
                                        addToCart={this.props.addToCart}
                                        removeFromCart={this.props.removeFromCart}
                                        cart={this.props.cart}
                                    />
                                )
                            })}
                        </div>
                    </div>

                </div>

            </>
        )
    }
}

const mapStoreToProps = (stateInStore) => {
    console.log(stateInStore.cart.cart);
    return {
        cart: stateInStore.cart.cart,
    }
}


export default connect(mapStoreToProps, { addToCart, removeFromCart })(HotelDescription);