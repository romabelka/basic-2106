import React from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increment, decrement } from "../ac";

function Dish(props) {
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
              onClick={props.handleDecrease}
            />
            <Button
              type="primary"
              shape="circle"
              icon="plus"
              data-id="dish-plus"
              onClick={props.handleIncrease}
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

const mapDispatchToProps = {
  handleIncrease: increment,
  handleDecrease: decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dish);
