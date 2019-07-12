import React, { useEffect } from "react";
import Dish from "./dish";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import { loadRestaurantMenu } from "../ac";
import { connect } from "react-redux";
import { menuSelector } from "../selectors";

function RestaurantMenu({ restaurantId, menu, loadRestaurantMenu }) {
  useEffect(() => {
    loadRestaurantMenu(restaurantId);
  }, []);

  return (
    <div style={{ padding: "16px" }}>
      <Row gutter={16}>
        {menu.map(dish => (
          <Col key={dish.id} span={8}>
            <Dish dish={dish} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

RestaurantMenu.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired
};

export default connect(
  (state, ownProps) => {
    return {
      menu: menuSelector(state, ownProps) || []
    };
  },
  {
    loadRestaurantMenu
  }
)(RestaurantMenu);
