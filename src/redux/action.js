import { ADD_USER, ADD_PASSWORD, ADD_EMAIL } from "./actionType";

export const addUser = (userName) => ({
    type: ADD_USER,
    payload: {
        userName,
    }
});

