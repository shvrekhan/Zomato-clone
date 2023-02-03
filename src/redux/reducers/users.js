import { ADD_USER } from "../actionType";

const initialState = {
    userDetails: {
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


export default function (state = initialState, action) {
    switch (action.type) {

        case ADD_USER: {
            const newState = {
                ...state,
                userDetails: {
                    ...action.payload,

                }
            }
            return newState;
        }

        default:
            return state;
    }
}
