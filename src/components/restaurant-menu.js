import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import Dish from "./dish";

function RestaurantMenu({ menu }) {
  return (
    <div style={{ padding: "16px" }}>
      <Row gutter={16}>
        {menu.map(id => (
          <Col key={id} span={8}>
            <Dish id={id} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

RestaurantMenu.propTypes = {
  menu: PropTypes.array.isRequired
};

export default connect()(RestaurantMenu);
