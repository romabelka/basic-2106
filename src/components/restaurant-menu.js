import React, { Component } from "react";
import Dish from "./dish";
import { Row, Col } from "antd";
import PropTypes from "prop-types";

class RestaurantMenu extends Component {
  render() {
    const { menu } = this.props;
    return (
      <div style={{ padding: "16px" }}>
        <Row gutter={16}>
          {menu.map(dish => (
            <Col key={dish.id} span={8}>
              <Dish {...dish} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

RestaurantMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object)
};

export default RestaurantMenu;
