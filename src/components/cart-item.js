import React from "react";
import { List } from "antd";
import { NavLink } from "react-router-dom";

function CartItem({ item }) {
  const { dish, amount, restaurant } = item;
  return (
    <List.Item>
      <NavLink to={`/restaurants/${restaurant.id}`}>
        {dish.name}: {amount} x {dish.price}$ = {amount * dish.price}$
      </NavLink>
    </List.Item>
  );
}

CartItem.propTypes = {};

export default CartItem;
