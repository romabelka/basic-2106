import React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, Button } from "antd";
import { addItem, removeItem } from "../ac";
import { dishSelector, cartItemAmountSelector } from "../selectors";

function Dish({ id, dish, amount, handleDecrease, handleIncrease }) {
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
              onClick={() => handleDecrease(id)}
            />
            <Button
              type="primary"
              shape="circle"
              icon="plus"
              data-id="dish-plus"
              onClick={() => handleIncrease(id)}
            />
          </Button.Group>
        </>
      ]}
    >
      <Card.Meta title={dish.name} description={dish.ingredients.join(", ")} />
    </Card>
  );
}

Dish.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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

// noinspection JSUnusedGlobalSymbols
Dish.defaultProps = {
  dish: PropTypes.shape({
    name: "Unknown",
    price: 0,
    ingredients: []
  }),
  amount: 0,
  handleDecrease: () => null,
  handleIncrease: () => null
};

const mapStateToProps = (state, ownProps) => ({
  amount: cartItemAmountSelector(state, ownProps) || 0,
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
