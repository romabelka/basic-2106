import React from "react";
import { connect } from "react-redux";
import { orderListSelector } from "../selectors";
import { Button, List } from "antd";
import CartItem from "./cart-item";
import { Consumer } from "../contexts/locale";

function Checkout({ orderList }) {
  return (
    <div>
      <List
        dataSource={orderList}
        renderItem={cartItem => <CartItem item={cartItem} />}
      />
      <Button type="primary">
        <Consumer>{locale => locale.orderNow}</Consumer>
      </Button>
    </div>
  );
}

Checkout.propTypes = {};

export default connect(state => ({
  orderList: orderListSelector(state)
}))(Checkout);
