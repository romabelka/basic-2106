import React, { Component } from "react";
import * as PropTypes from "prop-types";
import Dish from "./dish";
import { Row, Col } from "antd";

class RestaurantMenu extends Component {
  state = {
    error: null
  };

  static propTypes = {
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
      })
    )
  };

  static defaultProps = {
    menu: []
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

export default RestaurantMenu;
