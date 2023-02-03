import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavbarHotelPage from '../../Components/Navbar/NavbarHotelPage'
import "./Checkout.css"

export default class Checkout extends Component {
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
                            <div className='item-details-checkout d-flex'>
                                <div className='item-left pl-4 pt-2 pb-1'>
                                    <h5>Paneer Biryani</h5>
                                    <h5>₹ 225</h5>
                                </div>
                                <div className='item-right d-flex justify-content-end align-items-center pr-3'>
                                    <div className='btn-control d-flex justify-content-around '>
                                        <button className='control-btn'><b>+</b></button>
                                        <span>0</span>
                                        <button className='control-btn'><b>-</b></button>
                                    </div>
                                </div>
                            </div>

                            <div className='item-details-checkout d-flex mt-2'>
                                <div className='item-left pl-4 pt-2 pb-1'>
                                    <h5>Paneer Biryani</h5>
                                    <h5>₹ 225</h5>
                                </div>
                                <div className='item-right d-flex justify-content-end align-items-center pr-3'>
                                    <div className='btn-control d-flex justify-content-around '>
                                        <button className='control-btn'><b>+</b></button>
                                        <span>0</span>
                                        <button className='control-btn'><b>-</b></button>
                                    </div>
                                </div>
                            </div>

                            <div className='item-details-checkout d-flex mt-2'>
                                <div className='item-left pl-4 pt-2 pb-1'>
                                    <h5>Paneer Biryani</h5>
                                    <h5>₹ 225</h5>
                                </div>
                                <div className='item-right d-flex justify-content-end align-items-center pr-3'>
                                    <div className='btn-control d-flex justify-content-around '>
                                        <button className='control-btn'><b>+</b></button>
                                        <span>0</span>
                                        <button className='control-btn'><b>-</b></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="online_order">
                            <div className='add-more-items d-flex mt-3 align-items-center p-3'>
                                <div className='fa-solid fa-plus flex-icon fa-2x pl-3'></div>
                                <h5 className='flex-addmore'>Add more items</h5>
                                <div className='fa-solid fa-greater-than flex-icon'></div>
                            </div></Link>

                        <div className='add-more-items d-flex mt-3 justify-content-around align-items-center p-3'>
                            <div className='fa-regular fa-pen-to-square fa-2x pl-3 flex-icon'></div>
                            <h5 className='flex-addmore'>Add Cooking instructions</h5>
                            <div className='fa-solid fa-greater-than flex-icon'></div>
                        </div>

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

                        <div className='address d-flex'>

                        </div>


                    </div>
                </div>

            </>
        )
    }
}
