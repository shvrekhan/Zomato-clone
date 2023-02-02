import React, { Component } from 'react'
import "./Collections.css"

class Collections extends Component {
    render() {
        return (
            <>
                <div className="card col-lg-3 col-sm-4 my-3 collection-card bg-white d-flex flex-column text-white ">
                    <img className="card-img "
                        src={this.props.img}
                        alt="Card image" />
                    <div className="card-img-overlay overlay-text" >
                        <h5 className="card-title lead" >{this.props.subHead}</h5>
                    </div>
                </div>

            </>
        )
    }
}

export default Collections;