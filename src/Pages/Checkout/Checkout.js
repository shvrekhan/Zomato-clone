import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import NavbarHotelPage from '../../Components/Navbar/NavbarHotelPage'
import "./Checkout.css"
import Address from './Address';
import ItemCheckOut from './ItemCheckOut';

class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAddressChange: false,
            isAddCookingInstruction: false,
        }
    }

    addressChange = () => {
        this.setState({
            isAddressChange: !this.state.isAddressChange
        })
    }

    addCookingInst = () => {
        this.setState({
            isAddCookingInstruction: !this.state.isAddCookingInstruction
        })
    }
    render() {
        return (
            <>
                <NavbarHotelPage />

                <div className='d-flex justify-content-between container p-5'>
                    <div className='left-section'>
                        <div className="deliver-time d-flex p-3 ">
                            <div className='fa-solid fa-hourglass-end p-2 fa-2x hour-glass-color'></div>
                            <h5 className='pl-3 align-self-center'>Delivery in <b>30-35 min</b></h5>
                        </div>

                        <div className='items-added d-flex flex-column align-items-center mt-3'>
                            <h5>ITEMS ADDED</h5>

                            {this.props.cart.map((current) => {
                                return <ItemCheckOut 
                                current={current}/>
                            })}

                        </div>
                        <Link to="online_order">
                            <div className='add-more-items d-flex mt-3 align-items-center p-3'>
                                <div className='fa-solid fa-plus flex-icon fa-2x pl-3'></div>
                                <h5 className='flex-addmore'>Add more items</h5>
                                <div className='fa-solid fa-greater-than flex-icon'></div>
                            </div></Link>

                        <div
                            className='add-more-items d-flex mt-3 justify-content-around align-items-center p-3'
                            onClick={this.addCookingInst}>
                            <div className='fa-regular fa-pen-to-square fa-2x pl-3 flex-icon'></div>
                            <h5 className='flex-addmore'>Add Cooking instructions</h5>
                            <div className='fa-solid fa-greater-than flex-icon'></div>
                        </div>

                        {this.state.isAddCookingInstruction === true &&

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                        }

                        <div className='add-more-items d-flex mt-3 justify-content-around align-items-center p-3'>
                            <div className='fa-solid fa-utensils flex-icon utensil fa-2x pl-3'></div>
                            <h5 className='flex-addmore'>Don't send cutlery with this order</h5>
                            <input type="checkbox" className='flex-icon ' />
                        </div>


                    </div>

                    <div className='right-section d-flex flex-column'>
                        <div className='saving-corner d-flex flex-column align-items-center'>
                            <h5 className='pt-3 '>SAVINGS CORNER </h5>
                            <div className='coupons d-flex'>
                                <div className='fa-solid fa-tag fa-2x discount-icon pt-3'></div>
                                <div className='coupons-details d-flex flex-column' >
                                    <p>Save ₹100 more on this order</p>
                                    <p>CODE : HUNGRY</p>
                                </div>

                                <button className='apply'>APPLY</button>

                            </div>
                        </div>

                        <div className='address d-flex mt-2'>
                            <div className='fa-sharp fa-solid fa-location-dot fa-2x address-section-color'></div>
                            <p>{this.props.address.AddressLine1},{this.props.address.AddressLine2},{this.props.address.City} </p>
                            <button
                                className='address-change-button'
                                onClick={this.addressChange}><b>Change</b></button>
                        </div>
                        {this.state.isAddressChange === true && <Address />}


                        <div className='payment d-flex mt-2'>
                            <div className='fa-regular fa-credit-card fa-2x address-section-color'></div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Select Payment mode</option>
                                <option value="U.P.I">U.P.I</option>
                                <option value="Cash">Cash</option>
                            </select>
                        </div>

                        <Link to="order-on-the-way">
                            <div className='confirm-order d-flex'>
                                <div className='confirm-order-left-section  d-flex flex-column justify-content-center align-items-center pt-3'>
                                    <h6 className='total-price-to-be-paid'>₹ {80 + this.props.cart.reduce((totalPrice, currentDish) => {
                                        totalPrice += Number(currentDish.price) * Number(currentDish.quantity)
                                        return totalPrice;
                                    }, 0)}</h6>
                                    <p>TOTAL</p>
                                </div>

                                <div
                                    className='confirm-order-right-section'>
                                    <h4>Place Order</h4>
                                </div>
                            </div>
                        </Link>

                        


                    </div>
                </div>

            </>
        )
    }
}


const mapStoreToProps = (stateInStore) => {
    console.log(stateInStore.cart.cart)
    return {
        cart: stateInStore.cart.cart,
        address: stateInStore.address.address,
    }
}

export default connect(mapStoreToProps, {})(Checkout);