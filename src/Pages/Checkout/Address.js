import React, { Component } from 'react'
import { connect } from "react-redux";
import "./Checkout.css"

class Address extends Component {

    handelSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <>
                <div class="container mt-2 address-form">
                    <div class=" justify-content-center">
                        <div class="">
                            <form
                                onSubmit={this.handelSubmit}
                                class="w-100 rounded-1 p-4 border bg-white"
                            >
                                <label class="d-block mb-4">
                                    <span class="form-label d-block">Your name</span>
                                    <input
                                        name="YourName"
                                        type="text"
                                        class="form-control"
                                        defaultValue={this.props.address.YourName}
                                    />
                                </label>

                                <label class="d-block mb-4">
                                    <span class="form-label d-block">Address line 1</span>
                                    <input
                                        name="address1"
                                        type="text"
                                        class="form-control"
                                        defaultValue={this.props.address.AddressLine1}
                                    />
                                </label>

                                <label class="d-block mb-4">
                                    <span class="form-label d-block">Address line 2</span>
                                    <input
                                        name="address2"
                                        type="text"
                                        class="form-control"
                                        defaultValue={this.props.address.AddressLine2}
                                    />
                                </label>

                                <label class="d-block mb-4">
                                    <span class="form-label d-block">City</span>
                                    <input
                                        name="city"
                                        type="text"
                                        class="form-control"
                                        defaultValue={this.props.address.City} />
                                </label>

                                <label class="d-block mb-4">
                                    <span class="form-label d-block">State</span>
                                    <input
                                        name="state"
                                        type="text"
                                        class="form-control"
                                        defaultValue={this.props.address.State} />
                                </label>

                                <label class="d-block mb-4">
                                    <span class="form-label d-block">Zip</span>
                                    <input
                                        name="zip"
                                        type="text"
                                        class="form-control"
                                        defaultValue={this.props.address.Zip} />
                                </label>

                                <label class="d-block mb-4">
                                    <span class="form-label d-block">Country</span>
                                    <input
                                        name="country"
                                        type="text"
                                        class="form-control"
                                        defaultValue={this.props.address.Country}
                                    />
                                </label>

                                <label class="d-block mb-4">
                                    <span class="form-label d-block">Telephone</span>
                                    <input
                                        name="telephone"
                                        type="text"
                                        class="form-control"
                                        defaultValue={this.props.address.Telephone}
                                    />
                                </label>
                                <div class="mb-3">
                                    <button type="submit" class="btn btn-primary px-3 rounded-3">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

const mapStoreToProps = (stateInStore) => {
    console.log(stateInStore.address.address)
    return {
        address: stateInStore.address.address
    }
}


export default connect(mapStoreToProps, {})(Address);