import React, { useState } from "react";
import { Card, Button } from "antd";
import * as PropTypes from "prop-types";

function Dish(props) {
  let [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Card
      bordered
      actions={[
        `$${props.price}`,
        <>
          <span data-id="counter" style={{ margin: "0 12px" }}>
            {count}
          </span>
          <Button.Group>
            <Button
              data-id="minus"
              type="primary"
              shape="circle"
              icon="minus"
              onClick={decrement}
            />
            <Button
              data-id="plus"
              type="primary"
              shape="circle"
              icon="plus"
              onClick={increment}
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

export default Dish;
