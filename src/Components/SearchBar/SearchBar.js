import React, { Component } from 'react'
import "./SearchBar.css"
import { connect } from 'react-redux';
import { search } from "../../redux/action"
import { Link } from 'react-router-dom';

class SearchBar extends Component {

    handelSearch = (event) => {
        this.props.search(event.target.value)
    }

    render() {
        return (
            <>
                <div className='search-bar-container d-flex flex-wrap align-self-center justify-content-center'>
                    <div className='location-input-container d-flex'>
                        <div className='fa-sharp fa-solid fa-location-dot fa-2x location-icon-custom-css'></div>
                        <select class="form-control dropdown-border">
                            <option value="">Select Location</option>
                            <option value="Koramangala">Koramangala</option>
                            <option value="Marathahalli">Marathahalli</option>
                            <option value="Bhoganahalli">Bhoganahalli</option>
                        </select>
                        <div className='fa-solid fa-caret-up  triangle-icon-custom-css'></div>
                    </div>
                    <div className='search-input-container d-flex'>
                        <input
                            placeholder='Search for restaurant, cuisine or a dish'
                            className='search-input'
                            defaultValue={this.props.searchInput}
                            onChange={this.handelSearch} />
                        <Link to={"/search/" + this.props.searchInput}><div className='fa-solid fa-magnifying-glass  search-icon-custom-css'></div></Link>
                    </div>
                </div>
            </>
        )
    }
}

const mapStoreToProps = (stateInStore) => {
    console.log(stateInStore.search.search)
    return {
        searchInput: stateInStore.search.search.searchInput,
    }
}

export default connect(mapStoreToProps, { search })(SearchBar);