import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { Row, Col } from "antd";
import Dish from "./dish";

class RestaurantMenu extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired
  };

  state = {
    error: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return <h3>Oooops....</h3>;
    }

    const { menu } = this.props;

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
}

export default RestaurantMenu;
