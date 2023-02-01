import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact to="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;