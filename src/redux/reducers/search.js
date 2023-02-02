import { SEARCH } from "../actionType";

const initialState = {
    search: "",
}

export default function (state = initialState, action) {
    switch (action.type) {

        case SEARCH: {
            const newState = {
                ...state,
                search: action.payload,
            }
            return newState;
        }


        default:
            return state;
    }

}
