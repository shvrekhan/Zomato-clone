import { ADD_USER, SEARCH } from "./actionType";

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