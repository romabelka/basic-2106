import React, { useEffect } from "react";
import Dish from "./dish";
import { Row, Col, Spin } from "antd";
import { connect } from "react-redux";
import { loadMenu } from "../ac";
import { menuLoadedSelector, menuLoadingSelector } from "../selectors";

function RestaurantMenu({ restaurant, loaded, loading, loadMenu }) {
  useEffect(() => {
    if (!loaded && !loading) loadMenu(restaurant.id);
  }, [restaurant.id]);

  if (!loaded)
    return (
      <div>
        <Spin />
      </div>
    );

  return (
    <div style={{ padding: "16px" }}>
      <Row gutter={16}>
        {restaurant.menu.map(id => (
          <Col key={id} span={8}>
            <Dish id={id} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default connect(
  (state, ownProps) => ({
    loading: menuLoadingSelector(state, ownProps),
    loaded: menuLoadedSelector(state, ownProps)
  }),
  { loadMenu }
)(RestaurantMenu);
