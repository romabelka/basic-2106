import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { orderSelector } from "../selectors";
import Dish from "./dish";

function CartCheckout({ order, restaurant }) {
  if (!order.length)
    return (
      <div>
        Your cart is empty. Add something from the <span />
        <NavLink to="/restaurants">Restaurants List</NavLink>
      </div>
    );

  return (
    <div style={{ padding: "16px" }}>
      <Row gutter={16}>
        {order.map(dishId => (
          <Col key={dishId} span={8}>
            <Dish id={dishId} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

CartCheckout.propTypes = {
  order: PropTypes.array
};

export default connect(
  (state, ownProps) => ({
    order: orderSelector(state, ownProps)
  }),
  {}
)(CartCheckout);
