import React from "react";
import { connect } from "react-redux";

function Cart({ total, minRating }) {

  return(
    <>
      <div>total items: {total}</div>
      <div>filter of review: {minRating}</div>
    </>
  )
}

export default connect( state => ({
  total : Object.values(state.order).reduce( (acc, amount) => acc + amount, 0 ),
  minRating : state.filterReview || 0
}))(Cart);
