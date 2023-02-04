import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { connect } from "react-redux";
import HotelCategoryWise from "./Pages/HotelsCategoryWise/HotelCategoryWise";
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";
import SearchDish from "./Pages/SearchDish/SearchDish"
import Cart from "./Pages/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Pages/Checkout/Checkout";
import DineOut from "./Pages/DineOut/DineOut";
import OneTheWay from "./Pages/OnTheWay/OneTheWay";
import YourOrder from "./Pages/YourOrders/YourOrder";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/online_order">
              <HotelCategoryWise />
            </Route>

            <Route exact path="/restaurant/:id" render={(props) => {
              return <RestaurantPage
                {...props}
                restaurant={this.props.restaurant} />
            }} />

            <Route exact path="/search/:dish" render={(props) => {
              return <SearchDish
                {...props}
                restaurant={this.props.restaurant}
                dish={this.props.dishes} />
            }} />

            <Route exact path="/cart">
              <Cart />
            </Route>

            <Route exact path="/checkout">
              <Checkout />
            </Route>

            <Route exact path="/your_orders">
              <YourOrder />
            </Route>

            <Route exact path="/fine_dine">
              <DineOut
                dineOut={this.props.dineOut}
                hotelType="Dining Restaurants" />
            </Route>

            <Route exact path="/night_life">
              <DineOut
                dineOut={this.props.dineOut}
                hotelType="Nightlife Restaurants" />
            </Route>

            <Route exact path="/order-on-the-way">
              <OneTheWay />
            </Route>


          </Switch>
        </BrowserRouter>
        <Footer />
      </>

    )
  }
}

const mapStoreToProps = (stateInStore) => {
  console.log(stateInStore.cart.cart)
  return {
    restaurant: stateInStore.hotels.hotels,
    dishes: stateInStore.dishes.dishes,
    dineOut: stateInStore.DineOut.dineOut,


  }
}

export default connect(mapStoreToProps, {})(App);