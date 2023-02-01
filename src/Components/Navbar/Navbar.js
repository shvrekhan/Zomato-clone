import React, { Component } from 'react'
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

export default Navbar;