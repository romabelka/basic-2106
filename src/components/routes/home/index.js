import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Cart from "../../cart";
import RestaurantsPage from "../restaurants";
import OrderPage from "../order";
import Error from "../error";

const HomePage = () => {
  return (
    <>
      <h1>Delivery App</h1>

      <NavLink to="/checkout">
        <Cart />
      </NavLink>
      <NavLink to="/restaurants">Restaurants List</NavLink>

      <Switch>
        <Route
          path="/restaurants/:id/review"
          render={({ id }) => <h1>Add a review for {id}</h1>}
        />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route path="/checkout" component={OrderPage} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default HomePage;
