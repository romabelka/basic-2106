import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import Cart from "./components/cart";
import Filter from "./components/filter";
import RestaurantsPage from "./components/routes/restaurants";

export default function App() {
  return (
    <div>

      <h1>Delivery App</h1>
      <NavLink to="/checkout">Checkout</NavLink>
      <br/>
      <NavLink to="/restaurants">Restaurants</NavLink>
      <br/>
      <NavLink to="/filter">Filter</NavLink>
      <br/>
      <br/>
      <Switch>
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route
          path="/restaurants/:id/review"
          render={({ id }) => <h1>Add a review for {id}</h1>}
        />
        <Route path='/checkout' exact component={Cart} />
        <Route path="/filter" exact component={Filter} />
      </Switch>
    </div>
  );
}
