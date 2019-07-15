import React from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItem, removeItem } from "../ac";
import { dishSelector,amountOfDishInOrder } from "../selectors";

function Dish({ dish, amount, handleDecrease, handleIncrease, restaurantId, dishIdToSelect }) {
  const style = (dishIdToSelect===dish.id) ? {borderColor: "red", borderWidth: "medium"} : {};
  return (
    <Card style = {style}
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
              onClick={() => handleDecrease(dish.id, restaurantId)}
            />
            <Button
              type="primary"
              shape="circle"
              icon="plus"
              data-id="dish-plus"
              onClick={() => handleIncrease(dish.id, restaurantId)}
            />
          </Button.Group>
        </>
      ]}
    >
      <Card.Meta title={dish.name} description={dish.ingredients.join(", ")} />
    </Card>
  );
}

Dish.defaultProps = {
  name: "Unknown"
};

Dish.propTypes = {
  dish: PropTypes.object,
  amount: PropTypes.number,
  handleDecrease: PropTypes.func,
  handleIncrease: PropTypes.func,
  restaurantId: PropTypes.string
};

const mapStateToProps = (state, ownProps) => ({
  amount: amountOfDishInOrder(state,ownProps.restaurantId, ownProps.dishId) || 0,
  dish: dishSelector(state, ownProps)
});

const mapDispatchToProps = {
  handleIncrease: addItem,
  handleDecrease: removeItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dish);
