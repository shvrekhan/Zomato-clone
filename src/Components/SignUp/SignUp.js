import React from 'react'
import validator from 'validator';
import { connect } from 'react-redux';
import { addUser } from '../../redux/action';
import "./SignUp.css"
import { Link } from 'react-router-dom';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: "",
            password: "",
            checkbox: false,
            usernameError: "",
            emailError: "",
            passwordError: "",
            checkboxError: "",
            isUserNameValid: false,
            isEmailValid: false,
            isPasswordValid: false,
            isCheckBoxValid: false,
            isSignup: false,
            isValid: false,
        }
    }

    validateUserName = (value) => {
        if (value.trim().length === 0) {
            this.setState(
                {
                    usernameError: true,
                    isUserNameValid: false
                }
            );
        }
        else {
            this.setState(
                {
                    usernameError: false,
                    userName: value,
                    isUserNameValid: true,
                }
            );
        }
    }
    validateEmail = (value) => {
        if (validator.isEmail(value)) {
            this.setState(
                {
                    emailError: false,
                    email: value,
                    isEmailValid: true,
                }
            );
        }
        else {
            this.setState(
                {
                    emailError: true,
                    isEmailValid: false
                }
            );
        }
    }

    validatePassword = (value) => {
        if (validator.isStrongPassword(value)) {
            this.props.addUser(this.state)
            this.setState(
                {
                    passwordError: false,
                    password: value,
                    isPasswordValid: true,
                }
            );
        }
        else {
            this.setState(
                {
                    passwordError: true,
                    isPasswordValid: false
                }
            );
        }
    }

    validateCheckbox = (checked) => {
        if (checked) {
            this.setState({
                checkboxError: false,
                checkbox: checked,
                isCheckBoxValid: true,
            }, () => {
                const { isUserNameValid,
                    isEmailValid,
                    isPasswordValid,
                    isCheckBoxValid } = this.state;

                if (isUserNameValid && isEmailValid && isCheckBoxValid && isPasswordValid) {

                    this.setState({
                        isValid: true,
                    })
                }

            });
        }
        else {
            this.setState({
                checkboxError: true,
                isCheckBoxValid: false
            });
        }

    }

    handelSubmit = (event) => {
        event.preventDefault();
        const { isUserNameValid,
            isEmailValid,
            isPasswordValid,
            isCheckBoxValid } = this.state;

        if (isUserNameValid && isEmailValid && isCheckBoxValid && isPasswordValid) {
            this.props.addUser(this.state)
            this.setState({
                isSignup: true,
            }, () => {
                this.props.addUser(this.state)
            })
        }
    }

    render() {
        return (
            <>
                <button type="button"
                    className="btn-style-none"
                    data-toggle="modal"
                    data-target="#exampleModalCenter">

                    {this.state.isSignup === true &&
                        this.props.blackColor === true &&
                        <span className='blackColor'>
                            {this.state.userName}
                        </span>}

                    {this.state.isSignup === false &&
                        this.props.blackColor === true &&
                        <span className='blackColor'>
                            Sign Up
                        </span>}

                    {this.state.isSignup === true &&
                        <span>{this.state.userName}</span>
                    }

                    {this.state.isSignup === false &&
                        <span>Sign Up</span>
                    }
                </button>

                <div className="modal fade "
                    id="exampleModalCenter"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">

                    <div className="modal-dialog modal-dialog-centered modal-md " role="document">

                        <div className="modal-content modal-container-padding">

                            <form onSubmit={this.handelSubmit}>
                                <section className="d-flex signup-heading justify-content-between">
                                    {this.state.isSignup === true ?
                                        <>
                                            <div class="alert alert-success w-100 h-400" role="alert">
                                                SignUp success.
                                            </div>

                                        </> : <h2 className="signup-form-heading">SignUp</h2>}

                                    <button type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close">
                                            
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </section>

                                {this.state.isSignup === false && <>
                                    <section className="d-flex flex-column input-section">
                                        <input type="text"
                                            className="input-field-signup "
                                            placeholder="Full Name"
                                            onChange={(event) => {
                                                this.validateUserName(event.target.value)
                                            }}
                                        />

                                        {this.state.unameError ?
                                            <div style={{ color: "rgb(225,69,70)", fontSize: "12px" }}>
                                                Please enter a valid name</div> : null}



                                        <input type="text"
                                            className="input-field-signup "
                                            placeholder="Email"
                                            onChange={(event) => {
                                                this.validateEmail(event.target.value)
                                            }} />

                                        {this.state.emailError ?
                                            <div style={{ color: "rgb(225,69,70)", fontSize: "12px" }}>
                                                Invalid Email id
                                            </div> : null}


                                        <input type="password"
                                            className="input-field-signup"
                                            placeholder="Password"
                                            onChange={(event) => {
                                                this.validatePassword(event.target.value)
                                            }} />
                                        {this.state.passwordError ?
                                            <div style={{ color: "rgb(225,69,70)", fontSize: "12px" }}>
                                                Invalid Password
                                            </div> : null}

                                    </section>

                                    <div className="d-flex p-4">
                                        <input className="form-check-input checkbox-custom"
                                            type="checkbox"
                                            value=""
                                            id="defaultCheck1"
                                            onClick={(event) => {
                                                this.validateCheckbox(event.target.checked)
                                            }} />
                                        <label className="form-check-label check-label"
                                            htmlFor="defaultCheck1">
                                            I agree to Zomato's
                                            <span className="red">Terms of Service, Privacy Policy</span>
                                            and <span className="red">Content Policies</span>
                                        </label>
                                    </div>
                                    {this.state.isValid === true && <>
                                        <button className="create-account mb-3 create-button-padding active-button"
                                            type="submit" >Create account</button>
                                    </>}

                                    {this.state.isValid === false && <>
                                        <button className="create-account mb-3 create-button-padding"
                                            type="submit"
                                        >Create account</button>
                                    </>}

                                    <div role="button"
                                        className="continue-with-google">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.87566 13.2946L4.10987 16.1534L1.31093 16.2126C0.474461 14.6611 0 12.886 0 10.9997C0 9.17565 0.443609 7.45552 1.22994 5.94092H1.23054L3.72238 6.39776L4.81396 8.87465C4.5855 9.54071 4.46097 10.2557 4.46097 10.9997C4.46106 11.8072 4.60732 12.5808 4.87566 13.2946Z" fill="#FBBB00">
                                            </path>
                                            <path d="M21.8082 8.94507C21.9345 9.61048 22.0004 10.2977 22.0004 11C22.0004 11.7875 21.9176 12.5557 21.7598 13.2967C21.2243 15.8183 19.8252 18.0201 17.8869 19.5782L17.8863 19.5776L14.7477 19.4175L14.3035 16.6445C15.5896 15.8902 16.5947 14.7098 17.1242 13.2967H11.2422V8.94507H17.21H21.8082Z" fill="#518EF8">
                                            </path>
                                            <path d="M17.8865 19.5778L17.8871 19.5784C16.002 21.0937 13.6073 22.0002 11.0006 22.0002C6.81152 22.0002 3.16945 19.6588 1.31152 16.2132L4.87625 13.2952C5.8052 15.7744 8.19679 17.5392 11.0006 17.5392C12.2057 17.5392 13.3348 17.2134 14.3036 16.6447L17.8865 19.5778Z" fill="#28B446">
                                            </path>
                                            <path d="M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950726 18.0208 2.53241Z" fill="#F14336">
                                            </path>
                                        </svg>
                                        <span className='continue-with-google-text'>Continue with Google</span>
                                    </div>

                                    <p className="signup-bottom-heading mt-3">
                                        Already have an account?
                                        <span className="red">Log in</span>
                                    </p>

                                </>}
                            </form>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStoreToProps = (stateInStore) => {
    return {
        list: stateInStore,
        isSignUp: stateInStore.users.userDetails.userName.isSignup,
    }
}

export default connect(mapStoreToProps, { addUser })(SignUp);
