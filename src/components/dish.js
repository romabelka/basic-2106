import React from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";
import counterDecorator from "../decorators/counter";

function Dish(props) {
  return (
    <Card
      bordered
      actions={[
        `$${props.price}`,
        <>
          <span style={{ margin: "0 12px" }} data-id="dish-counter">
            {props.count}
          </span>
          <Button.Group>
            <Button
              type="primary"
              shape="circle"
              icon="minus"
              data-id="dish-remove-btn"
              onClick={props.decrement}
            />
            <Button
              type="primary"
              shape="circle"
              icon="plus"
              data-id="dish-add-btn"
              onClick={props.increment}
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
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
};

export default counterDecorator(Dish);
