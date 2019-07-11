import React, { Component } from "react";
import Dish from "./dish";
import { Row, Col } from "antd";
import PropTypes from "prop-types";

class RestaurantMenu extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired,
    restaurantId: PropTypes.string.isRequired
  };

  static getDerivedStateFromProps(props, state) {
    return {};
  }

  state = {
    error: null
  };

  render() {
    if (this.state.error) return <h3>Oooops....</h3>;
    const { menu, restaurantId } = this.props;
    return (
      <div style={{ padding: "16px" }}>
        <Row gutter={16}>
          {menu.map(id => (
            <Col key={id} span={8}>
              <Dish id={id} restaurantId={restaurantId} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default RestaurantMenu;
