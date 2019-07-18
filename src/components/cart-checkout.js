import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Row, Col } from "antd";
import { orderSelector } from "../selectors";
import Dish from "./dish";

function CartCheckout({ order, restaurant }) {
  const { t, i18n } = useTranslation();

  if (!order.length)
    return (
      <div>
        {t("cart-checkout.empty")} <span />
        <NavLink to="/restaurants">{t("restaurants.mainpage")}</NavLink>
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
