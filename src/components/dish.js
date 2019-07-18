import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, Button } from "antd";
import { addItem, removeItem } from "../reducer/order/actions";
import { dishRestaurantSelector, dishSelector } from "../selectors";

function Dish({ dish, amount, handleDecrease, handleIncrease, restaurant }) {
  return (
    <Card
      bordered
      actions={[
        `$${dish.price}`,
        <>
          <span style={{ margin: "0 12px" }} data-id="dish-amount">
            {amount}
          </span>
          <Button.Group>
            <Button
              type="primary"
              shape="circle"
              icon="minus"
              data-id="dish-minus"
              onClick={() => handleDecrease(dish.id)}
            />
            <Button
              type="primary"
              shape="circle"
              icon="plus"
              data-id="dish-plus"
              onClick={() => handleIncrease(dish.id)}
            />
          </Button.Group>
        </>
      ]}
    >
      <NavLink to={`/restaurants/${restaurant.id}`}>
        <Card.Meta
          title={dish.name}
          description={dish.ingredients.join(", ")}
        />
      </NavLink>
    </Card>
  );
}

Dish.defaultProps = {
  name: "Unknown"
};

Dish.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string)
  }),
  amount: PropTypes.number,
  handleDecrease: PropTypes.func,
  handleIncrease: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order.get(ownProps.id) || 0,
  dish: dishSelector(state, ownProps),
  restaurant: dishRestaurantSelector(state, ownProps)
});

const mapDispatchToProps = {
  handleIncrease: addItem,
  handleDecrease: removeItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dish);
