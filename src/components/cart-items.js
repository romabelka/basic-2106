import React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { List } from "antd";
import CartItem from "./cart-item";
import { cartItemsIdsSelector } from "../selectors";

const CartItems = ({ orderItemsId }) => (
  <List
    dataSource={orderItemsId}
    renderItem={dishId => (
      <List.Item>
        <CartItem dishId={dishId} />
      </List.Item>
    )}
  />
);

CartItems.propTypes = {
  orderItemsId: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
};

CartItems.defaultProps = {
  orderItemsId: []
};

const mapStateToProps = state => ({
  orderItemsId: cartItemsIdsSelector(state)
});

export default connect(mapStateToProps)(CartItems);
