import React, { useState } from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";

function Dish(props) {
  const [amount, setAmount] = useState(0);
  const onPlusClick = () => setAmount(amount + 1);
  const onMinusClick = () => (amount ? setAmount(amount - 1) : 0);
  return (
    <Card
      bordered
      actions={[
        `$${props.price}`,
        <>
          <span data-id="span" style={{ margin: "0 12px" }}>
            {amount}
          </span>
          <Button.Group>
            <Button
              onClick={onMinusClick}
              data-id="minus-btn"
              type="primary"
              shape="circle"
              icon="minus"
            />
            <Button
              onClick={onPlusClick}
              data-id="plus-btn"
              type="primary"
              shape="circle"
              icon="plus"
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
  price: PropTypes.number,
  name: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Dish;
