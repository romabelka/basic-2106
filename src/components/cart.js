import React from "react";
import { connect } from "react-redux";
import { totalAmountSelector, totalPriceSelector } from "../selectors";
import { Translate } from "../locale/context";

function Cart({ totalAmount, totalPrice }) {
  return (
    <div>
      <Translate>cart-total</Translate>&nbsp;{totalAmount}&nbsp;
      <Translate>cart-items</Translate>,&nbsp;
      <Translate>cart-for</Translate>&nbsp;
      {totalPrice}$
    </div>
  );
}

export default connect(state => ({
  totalAmount: totalAmountSelector(state),
  totalPrice: totalPriceSelector(state)
}))(Cart);
