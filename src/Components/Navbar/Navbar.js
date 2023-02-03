import React, { Component } from 'react'
import { connect } from 'react-redux';
import SignUp from '../SignUp/SignUp';
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar  justify-content-between">
                    <a className="navbar-brand get-the-app-color "
                        href="https://play.google.com/store/apps/details?id=com.application.zomato"
                        target="_blank">
                        Get the App
                    </a>
                    <SignUp />


                </nav>
            </>
        )
    }
}

const mapStoreToProps = (stateInStore) => {
    return {
        isSignUp: stateInStore.users.userDetails.userName.isSignup,
    }
}


export default connect(mapStoreToProps, {})(Navbar);