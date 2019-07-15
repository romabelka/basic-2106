import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form";
import Cart from "./components/cart";
import Filter from "./components/filter";
import RestaurantsPage from "./components/routes/restaurants";
import {Button, Icon} from "antd";
import "./styles.css"

export default function App() {
  const style={display: 'inline', fontSize: '32px'};
  return (
    <div>
      <NavLink to="/"><div style={style}><p style={style}>Delivery App  </p><Icon type="home" theme="twoTone" /></div></NavLink>
      
      <NavLink to="/checkout">
        <Cart />
      </NavLink>
      <NavLink to="/restaurants">
        <Button type="link" size="large">Restaurants</Button></NavLink>
      <NavLink to="/filter">
        <Button type="link" size="large">Filter</Button><Icon type="filter" /></NavLink>
        

      <Switch>
        <Route path="/filter" exact component={Filter} />
        <Route
          path="/restaurants/:id/review"
          render={({ id }) => <h1>Add a review for {id}</h1>}
        />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route path="/checkout" component={OrderForm} />
      </Switch>
    </div>
  );
}
