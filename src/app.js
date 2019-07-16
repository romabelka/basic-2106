import React from "react";
import { Route, NavLink, Switch, withRouter } from "react-router-dom";
import "antd/dist/antd.css";
import Cart from "./components/cart";
import RestaurantsPage from "./components/routes/restaurants";
import OrderPage from "./components/routes/order";
import Error from "./components/routes/error";

function App() {
  return (
    <div>
      <h1>Delivery App</h1>

      <NavLink to="/checkout">
        <Cart />
      </NavLink>
      <NavLink to="/restaurants">Restaurants List</NavLink>

      <Switch>
        <Route path="/" exact render={() => null} />
        <Route path="/restaurants" exact component={RestaurantsPage} />
        <Route
          path="/restaurants/:id/review"
          render={({ id }) => <h1>Add a review for {id}</h1>}
        />
        <Route path="/checkout" component={OrderPage} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
