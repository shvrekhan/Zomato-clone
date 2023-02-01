import React, { Component } from 'react'
import "./Collections.css"

class Collections extends Component {
    render() {
        return (
            <>
                <div className="card col-lg-3 col-sm-4 my-3 collection-card bg-white d-flex flex-column text-white ">
                    <img className="card-img "
                        src="https://b.zmtcdn.com/data/collections/1d1e838de3c921a6bdacb382a3d01c62_1667458986.jpg?output-format=webp"
                        alt="Card image" />
                    <div className="card-img-overlay overlay-text" >
                        <h5 className="card-title lead" >16 newly opening restaurants</h5>
                    </div>
                </div>

            </>
        )
    }
}

export default Collections;