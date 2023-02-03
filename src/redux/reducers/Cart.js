import { ADD_TO_CART, REMOVE_FROM_CART, DELETE_ITEM_FROM_CART } from "../actionType";

const initialState = {
    cart: []
}

export default function (state = initialState, action) {
    switch (action.type) {


        case ADD_TO_CART:
            console.log(action.payload.item.id)
            const itemIndex = state.cart.findIndex((items) => {
                console.log(items.id)
                console.log(action.payload.item.id)
                return items.id === action.payload.item.id;
            })
            console.log(itemIndex);
            if (itemIndex >= 0) {
                state.cart[itemIndex].quantity += 1
                return {
                    ...state,
                    cart: [...state.cart]
                }
            } else {
                const temp = { ...action.payload.item, quantity: 1 }
                return {
                    ...state,
                    cart: [...state.cart, temp]
                }
            }


        case REMOVE_FROM_CART:
            const itemIndexToDec = state.cart.findIndex((item) => {
                return item.id === action.payload.id;
            })
            console.log(itemIndexToDec);
            if (itemIndexToDec >= 0 && state.cart[itemIndexToDec].quantity >= 1) {
                state.cart[itemIndexToDec].quantity -= 1
                return {
                    ...state,
                    cart: [...state.cart]

                }
            } else if (state.cart[itemIndexToDec].quantity === 1) {
                console.log("delete")
                const data = state.cart.filter((item) => {
                    return item.id !== action.payload;
                })

                return {
                    ...state,
                    carts: data,
                }
            }



        default:
            return state;
    }
}
