import React, { Component } from 'react'
import NavbarHotelPage from '../../Components/Navbar/NavbarHotelPage'
import { connect } from 'react-redux'
import { addToCart, removeFromCart, deleteItemFromCart } from '../../redux/action'
import CartCard from '../../Components/CartCards/CartCard'
import "./Cart.css"
import { Link } from 'react-router-dom'

class Cart extends Component {

    render() {
        return (
            <>
                <NavbarHotelPage />
                {this.props.cart.length === 0 &&
                    <div className='no-item-container d-flex flex-column align-items-center'>
                        <div className=''>

                            <h3 className='align-items-center'>Your Cart is Empty.</h3>
                        </div>
                        <div className='no-item-in-cart '>
                            <img src="https://www.mentormyboard.com/assets/img/empty-cart.png" />
                        </div>


                    </div>
                }


                {this.props.cart.length > 0 &&
                    <div className='container'>
                        <div className='you-order mt-5'>
                            <h2>Your order</h2>
                            <hr></hr>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex flex-column'>
                                {this.props.cart.map((current) => {
                                    return <CartCard
                                        key={current.id}
                                        current={current}
                                        id={current.id}
                                        img={current.imgUrl}
                                        title={current.title}
                                        description={current.description}
                                        rating={current.rating}
                                        price={current.price}
                                        quantity={current.quantity}
                                        addToCart={this.props.addToCart}
                                        removeFromCart={this.props.removeFromCart}
                                    />
                                })}
                            </div>
                            <div className='checkout-box d-flex flex-column mb-5'>
                                <div className='bill-summary pl-3 pt-2'>
                                    <h2>Bill Summary</h2>
                                    <hr></hr>
                                </div>
                                <div className='cart-total-quantity d-flex justify-content-between pr-3 pl-3'>
                                    <h5>Quantity</h5>
                                    <h5>{this.props.cart.reduce((totalQuantity, currentDish) => {
                                        totalQuantity += currentDish.quantity;
                                        return totalQuantity;
                                    }, 0)}</h5>
                                </div>
                                <div className='cart-total-quantity d-flex justify-content-between pr-3 pl-3'>
                                    <h5>Amount</h5>
                                    <h5>{this.props.cart.reduce((totalPrice, currentDish) => {
                                        totalPrice += Number(currentDish.price) * Number(currentDish.quantity)
                                        return totalPrice;
                                    }, 0)}</h5>
                                </div>
                                <div className='cart-total-quantity d-flex justify-content-between pr-3 pl-3'>
                                    <h5>Delivery Fee</h5>
                                    <h5>80</h5>
                                </div>
                                <hr></hr>
                                <div className='cart-total-quantity d-flex justify-content-between pr-3 pl-3'>
                                    <h4>Grand Total</h4>
                                    <h4>
                                        {80 + this.props.cart.reduce((totalPrice, currentDish) => {
                                            totalPrice += Number(currentDish.price) * Number(currentDish.quantity)
                                            return totalPrice;
                                        }, 0)}
                                    </h4>
                                </div>
                                <button
                                    className='check-out-button'>   
                                    <Link to="/checkout"> Checkout</Link></button>
                            </div>
                        </div>
                    </div>}


            </>
        )
    }
}

const mapStoreToProps = (stateInStore) => {
    return {
        cart: stateInStore.cart.cart,
        isSignUp: stateInStore.users.userDetails.userName.isSignup,
        userName: stateInStore.users.userDetails.userName.userName,
    }
}

export default connect(mapStoreToProps, { addToCart, removeFromCart, deleteItemFromCart })(Cart);
