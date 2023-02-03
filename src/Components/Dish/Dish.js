import React, { Component } from 'react'
import "./Dish.css"

export default class Dish extends Component {
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
        this.handelLiveCountSub();
        this.props.removeFromCart(this.props.current)
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

    render() {
        return (
            <>
                <div class="card d-flex m-1 card-dish" style={{ maxWidth: "18rem" }}>
                    <img class="card-img-top dish-card-image" src={this.props.img} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{this.props.title}</h5>
                        <p class="card-text">{this.props.description}</p>
                        <div className='d-flex'>
                            <button className='add-to-cart' onClick={this.handelAddToCart}>+</button>
                            <span className='live-cart-count'>{this.state.counter}</span>
                            <button className='remove-from-cart' onClick={this.handelRemoveFromCart}>-</button>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
