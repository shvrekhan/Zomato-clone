import { ADD_IN_ORDER_HISTORY } from "../actionType";

const initialState = {
    yourOrders: [],
}


export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_IN_ORDER_HISTORY:
            return {
                yourOrders: [...state, action.payload]
            }

        default:
            return state;
    }
}