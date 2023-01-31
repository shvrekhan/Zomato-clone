import React from "react";
import "./Header.css"
import SignUp from "../SignUp/SignUp";

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignup: false,
        }
    }

    handelSignup = () => {
        this.setState({
            isSignup: !this.state.isSignup
        })
    }

    render() {
        return (
            <>
                {/* <button onClick={this.handelSignup}>Signup</button>
                {this.state.isSignup === true && <SignUp />} */}

                <SignUp />
            </>
        )
    }
}

export default Header;