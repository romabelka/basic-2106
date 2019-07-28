import React from "react";
import { connect } from "react-redux";
import { totalAmountSelector, totalPriceSelector } from "../selectors";
import { Consumer } from "../contexts/locale";

function Cart({ totalAmount, totalPrice }) {
  return (
    <div>
      <Consumer>
        {translations => translations.cartTotals(totalAmount, totalPrice)}
      </Consumer>
    </div>
  );
}

export default connect(state => ({
  totalAmount: totalAmountSelector(state),
  totalPrice: totalPriceSelector(state)
}))(Cart);
