import { ADD_USER, SEARCH, ADD_TO_CART, REMOVE_FROM_CART, DELETE_ITEM_FROM_CART, ADD_IN_ORDER_HISTORY } from "./actionType";

export const addUser = (userName) => ({
    type: ADD_USER,
    payload: {
        userName,
    }
});

export const search = (searchInput) => ({
    type: SEARCH,
    payload: {
        searchInput,
    }
})

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: {
        item,
    }
})

export const removeFromCart = (item) => ({
    type: REMOVE_FROM_CART,
    payload: item
})

export const deleteItemFromCart = (item) => ({
    type: DELETE_ITEM_FROM_CART,
    payload: {
        item,
    }
})

export const addToOrderHistory = (item) => ({
    type: ADD_IN_ORDER_HISTORY,
    payload: {
        item,
    }
})