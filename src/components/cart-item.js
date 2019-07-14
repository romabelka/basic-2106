import React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { cartItemSelector } from "../selectors";

const CartItem = ({ cartItem }) => (
  <div>
    <NavLink to={`/restaurants/${cartItem.restaurantId}`}>
      {cartItem.name}
    </NavLink>{" "}
    x {cartItem.amount} x ${cartItem.price}
  </div>
);

CartItem.propTypes = {
  dishId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cartItem: PropTypes.shape({
    amount: PropTypes.number,
    name: PropTypes.string,
    restaurantId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    price: PropTypes.number
  })
};

CartItem.defaultProps = {
  cartItem: PropTypes.shape({
    amount: 0,
    name: "Unnamed dish",
    price: 0
  })
};

export default connect((state, { dishId }) => ({
  cartItem: cartItemSelector(state, { id: dishId })
}))(CartItem);
