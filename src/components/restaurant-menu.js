import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col, Icon } from "antd";
import Dish from "./dish";
import { loadAllDishes } from "../reducer/dishes/actions";
import { menuDishesSelector } from "../selectors";

function RestaurantMenu({
  restaurantId,
  menu,
  loadAllDishes,
  areDishesLoading
}) {
  useEffect(() => {
    loadAllDishes(restaurantId);
  }, [loadAllDishes, restaurantId]);

  const body = areDishesLoading && (
    <div style={{ textAlign: "center" }}>
      <Icon type="loading" style={{ fontSize: 24, color: "#fadb14" }} spin />
    </div>
  );

  return (
    <>
      {body}
      <div style={{ padding: "16px" }}>
        <Row gutter={16}>
          {menu.map(dish => (
            <Col key={dish.id} span={8}>
              <Dish dish={dish} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

RestaurantMenu.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
  areDishesLoading: PropTypes.bool
};

export default connect(
  (state, ownProps) => {
    return {
      areDishesLoading: state.dishes.get("loading"),
      menu: menuDishesSelector(state, ownProps) || []
    };
  },
  {
    loadAllDishes
  }
)(RestaurantMenu);
