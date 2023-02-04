import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import SignUp from '../SignUp/SignUp';
import { connect } from 'react-redux';

class NavbarHotelPage extends Component {
    render() {
        return (
            <>
                <nav class="navbar d-flex pl-5 pr-5">
                    <a class="navbar-brand">
                        <Link to="/">
                            <img
                                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                                width="130"
                                height="30"
                                alt="" />
                        </Link>
                    </a>
                    <SearchBar />
                    <Link to="/cart">
                        <span>
                            Cart
                        </span>
                    </Link>
                    {this.props.isSignUp === true && <span>{this.props.userName}</span>}
                    {this.props.isSignUp === undefined && <SignUp blackColor={true} />}


                </nav>

            </>
        )
    }
}

const mapStoreToProps = (stateInStore) => {
    // console.log(stateInStore.users.userDetails.userName.userName)
    return {
        isSignUp: stateInStore.users.userDetails.userName.isSignup,
        userName: stateInStore.users.userDetails.userName.userName,


    }
}

export default connect(mapStoreToProps, {})(NavbarHotelPage);