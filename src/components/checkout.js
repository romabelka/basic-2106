import React from "react";
import { connect } from "react-redux";
import { orderListSelector } from "../selectors";
import { Button, List } from "antd";
import CartItem from "./cart-item";
import { Consumer } from "../contexts/context";

function Checkout({ orderList }) {
  return (
    <Consumer>
      {context => (
        <div>
          <List
            dataSource={orderList}
            renderItem={cartItem => <CartItem item={cartItem} />}
          />
          <Button type="primary">{context.localization.ORDER}</Button>
        </div>
      )}
    </Consumer>
  );
}

Checkout.propTypes = {};

export default connect(state => ({
  orderList: orderListSelector(state)
}))(Checkout);
