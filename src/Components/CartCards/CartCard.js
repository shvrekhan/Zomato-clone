import React, { Component } from 'react'
import "./CartCard.css"

class CartCard extends Component {
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
                {console.log(this.props)}
                <div className='d-flex m-1 cart-card-1'>
                    <div className='image-container-cart'>
                        <img src={this.props.img} className="image-cart-item" />
                    </div>
                    <div className='information-cart d-flex flex-column'>
                        <div className='heading'>
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className='description'>
                            <p>{this.props.description.slice(0, 40)}...</p>
                        </div>
                        <div className='rating-cart'>
                            <h5>Rating-{this.props.rating}</h5>
                        </div>

                        <div className='Price-for-one'>Price - {this.props.price}</div>
                    </div>

                    <div className='d-flex flex-column align-items-center justify-content-center price-counter'>
                        <div className='d-flex'>
                            <button
                                className='counter-button'
                                onClick={this.handelAddToCart}>+</button>
                            <span
                                className='counter-count'>
                                {this.state.counter}
                            </span>

                            <button
                                className='counter-button'
                                onClick={this.handelRemoveFromCart}>-</button>
                        </div>
                        <div className='total-price mt-2'>
                            <h5>Total-{this.props.price * this.state.counter}</h5>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default CartCard;