import React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { totalAmountSelector, totalPriceSelector } from "../selectors";

function Cart({ totalAmount, totalPrice }) {
  return (
    <div>
      total {totalAmount} items from {totalPrice}$
    </div>
  );
}

Cart.propTypes = {
  totalAmount: PropTypes.number,
  totalPrice: PropTypes.number
};

Cart.defaultProps = {
  totalAmount: 0,
  totalPrice: 0
};

export default connect(state => ({
  totalAmount: totalAmountSelector(state),
  totalPrice: totalPriceSelector(state)
}))(Cart);
