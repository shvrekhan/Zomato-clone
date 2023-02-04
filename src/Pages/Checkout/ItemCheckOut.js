import React, { Component } from 'react'

class ItemCheckOut extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    handelAddToCart = () => {
        this.handelLiveCountAdd();
        this.props.addToCart(this.props.current)
    }

    handelRemoveFromCart = () => {

        // else if (this.props.current.quantity >= 0) {
        this.handelLiveCountSub();
        this.props.removeFromCart(this.props.current)
        // }

    }

    handelLiveCountAdd = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handelLiveCountSub = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1,
            })
        }
    }
    componentDidMount() {
        this.setState({
            counter: this.props.quantity,
        })
    }
    render() {
        return (
            <>
                <div className='item-details-checkout d-flex mb-2'>
                    <div className='item-left pl-4 pt-2 pb-1'>
                        <h5>{this.props.current.title}</h5>
                        <h5>₹ {this.props.current.price}</h5>
                    </div>
                    <div className='item-right d-flex justify-content-end align-items-center pr-3'>
                        <div className='btn-control d-flex justify-content-around '>
                            {/* <button
                                onClick={this.handelAddToCart}
                                className='control-btn'>
                                <b>+</b>
                            </button> */}
                            <span>{this.props.current.quantity}</span>
                            {/* <button
                                onClick={this.handelRemoveFromCart}
                                className='control-btn'>
                                <b>-</b>
                            </button> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default ItemCheckOut;