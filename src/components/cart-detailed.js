import React from "react";
import Dish from "./dish";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { orderSelector } from "../selectors";
import PropTypes from "prop-types";

function CartDetailed({ order }) {
  if (!order.length) return <div>Your cart is empty...</div>;

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

CartDetailed.propTypes = {
  order: PropTypes.array
};

export default connect(
  (state, ownProps) => ({
    order: orderSelector(state, ownProps)
  }),
  {}
)(CartDetailed);
