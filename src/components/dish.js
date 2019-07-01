import React, { useState } from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";

function Dish(props) {
  const [counter, setCounter] = useState(0);

  const changeCounter = operation => () => {
    operation === "plus"
      ? setCounter(counter + 1)
      : setCounter(counter === 0 ? counter : counter - 1);
  };

  return (
    <Card
      bordered
      actions={[
        `$${props.price}`,
        <>
          <span data-id="count" style={{ margin: "0 12px" }}>
            {counter}
          </span>
          <Button.Group>
            <Button
              type="primary"
              shape="circle"
              icon="minus"
              onClick={changeCounter("minus")}
              data-id="minus-btn"
            />
            <Button
              type="primary"
              shape="circle"
              icon="plus"
              onClick={changeCounter("plus")}
              data-id="plus-btn"
            />
          </Button.Group>
        </>
      ]}
    >
      <Card.Meta
        title={props.name}
        description={props.ingredients.join(", ")}
        data-id="dish"
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
