import { combineReducers } from "redux";

import users from "./users";
import hotels from "./Hotels";
import hotelCategory from "./HotelCategory";
import collections from "./Collections"
import topHotels from "./TopHotels"
import search from "./search";
import cart from "./Cart";
import dishes from "./Dishes"
import DineOut from "./DineOut";
import nightLife from "./NightLife"
import address from "./Address";
import yourOrders from "./YourOrders";

export default combineReducers({
    users,
    hotels,
    hotelCategory,
    collections,
    topHotels,
    search,
    cart,
    dishes,
    DineOut,
    nightLife,
    address,
    yourOrders
});

