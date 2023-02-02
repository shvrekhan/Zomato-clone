import { combineReducers } from "redux";

import users from "./users";
import hotels from "./Hotels";
import hotelCategory from "./HotelCategory";
import collections from "./Collections"
import topHotels from "./TopHotels"

export default combineReducers({ users, hotels, hotelCategory, collections, topHotels });

