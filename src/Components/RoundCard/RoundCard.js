import React, { Component } from 'react'
import "./RoundCard.css"

export default class RoundCard extends Component {
    render() {
        return (
            <>
                <div className='image-text-container d-flex flex-column align-items-center'>
                    <div className='top-brand-image'>
                        <img src={this.props.img} className="top-brand-image-container" />
                    </div>
                    <div class="top-brand-name">{this.props.title}</div>
                    <div class="top-brand-time">{this.props.time}</div>

                </div>
            </>
        )
    }
}
