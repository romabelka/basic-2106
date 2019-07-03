import React from "react";
import { connect } from "react-redux";

function Cart({ total }) {
  return <div>total items: {total}</div>;
}

export default connect(state => ({
  total: Object.values(state.order).reduce((acc, amount) => acc + amount, 0)
}))(Cart);
