import React from "react";
import { connect } from "react-redux";
import { totalAmountSelector, totalPriceSelector } from "../selectors";
import { Consumer } from "../contexts/context";

function Cart({ totalAmount, totalPrice }) {
  return (
    <Consumer>
      {context => (
        <div>
          {`${context.localization.TOTAL} ${totalAmount} ${
            context.localization.FROM
          } ${totalPrice}$`}
        </div>
      )}
    </Consumer>
  );
}

export default connect(state => ({
  totalAmount: totalAmountSelector(state),
  totalPrice: totalPriceSelector(state)
}))(Cart);
