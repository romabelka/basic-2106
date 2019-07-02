import React from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Dish(props) {
  const handleIncrease = () => props.dispatch({ type: "increment" });
  const handleDecrease = () => props.dispatch({ type: "decrement" });
  return (
    <Card
      bordered
      actions={[
        `$${props.price}`,
        <>
          <span style={{ margin: "0 12px" }} data-id="dish-amount">
            {props.amount}
          </span>
          <Button.Group>
            <Button
              type="primary"
              shape="circle"
              icon="minus"
              data-id="dish-minus"
              onClick={handleDecrease}
            />
            <Button
              type="primary"
              shape="circle"
              icon="plus"
              data-id="dish-plus"
              onClick={handleIncrease}
            />
          </Button.Group>
        </>
      ]}
    >
      <Card.Meta
        title={props.name}
        description={props.ingredients.join(", ")}
      />
    </Card>
  );
}

Dish.defaultProps = {
  name: "Unknown"
};

Dish.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  amount: state.count
});

export default connect(mapStateToProps)(Dish);
