import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { connect } from "react-redux";
import HotelCategoryWise from "./Pages/HotelsCategoryWise/HotelCategoryWise";
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";
import SearchDish from "./Pages/SearchDish/SearchDish"

class App extends React.Component {
  render() {
    return (
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
              restaurant={this.props.restaurant} />
          }} />

        </Switch>
      </BrowserRouter>
    )
  }
}

const mapStoreToProps = (stateInStore) => {
  // console.log(stateInStore.hotels.hotels);
  return {
    restaurant: stateInStore.hotels.hotels,

  }
}

export default connect(mapStoreToProps, {})(App);