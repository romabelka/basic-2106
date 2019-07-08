import React from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItem, removeItem } from "../ac";
import { dishSelector } from "../selectors";

function Dish({ dish, amount, handleDecrease, handleIncrease }) {
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
      <Card.Meta title={dish.name} description={dish.ingredients.join(", ")} />
    </Card>
  );
}

Dish.defaultProps = {
  name: "Unknown"
};

Dish.propTypes = {
  price: PropTypes.number,
  name: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.id] || 0,
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
