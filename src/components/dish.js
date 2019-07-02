import React, { useState } from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";

export default function Dish(props) {
  const [count, setCount] = useState(0);
  return (
    <Card
      bordered
      actions={[
        `$${props.price}`,
        <>
          <span style={{ margin: "0 12px" }} data-id="dish-count">
            {count}
          </span>
          <Button.Group>
            <Button
              type="primary"
              shape="circle"
              icon="minus"
              onClick={handleMinusCount}
              data-id="minus-btn"
            />
            <Button
              type="primary"
              shape="circle"
              icon="plus"
              onClick={handlePlusCount}
              data-id="plus-btn"
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
  function handlePlusCount() {
    setCount(count + 1);
  }
  function handleMinusCount() {
    count <= 0 ? setCount(0) : setCount(count - 1);
  }
}

Dish.defaultProps = {
  name: "Unknown"
};

Dish.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
};
