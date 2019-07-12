import React from "react";
import { connect } from "react-redux";
import { totalAmountSelector, totalPriceSelector } from "../selectors";

function Cart({ totalAmount, totalPrice }) {
  return (
    <div>
      total {totalAmount} items from {totalPrice}$
    </div>
  );
}

export default connect(state => ({
  totalAmount: totalAmountSelector(state),
  totalPrice: totalPriceSelector(state)
}))(Cart);
