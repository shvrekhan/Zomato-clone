import { ADD_EMAIL, ADD_PASSWORD, ADD_USER } from "../actionType";
import { uuid } from 'uuid';

const initialState = {
    userDetails: {
        userName: "",
        email: "",
        password: "",
        checkbox: false,
        unameError: "",
        emailError: "",
        passwordError: "",
        checkboxError: ""
    }
}


export default function (state = initialState, action) {
    switch (action.type) {

        case ADD_USER: {
            // const { userName, email, password } = action.payload;
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
