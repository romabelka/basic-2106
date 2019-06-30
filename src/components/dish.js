import React, { Fragment, useState } from "react";
import * as PropTypes from "prop-types";
import { Card, Button } from "antd";

const Quantity = ({ quantity }) => (
  <span style={{ margin: "0 12px" }}>{quantity}</span>
);

Quantity.propTypes = {
  quantity: PropTypes.number
};

Quantity.defaultProps = {
  quantity: 0
};

const Dish = props => {
  const [quantity, setQuantity] = useState(0);

  return (
    <Card
      bordered
      actions={[
        `$${props.price}`,
        <Fragment>
          <Quantity quantity={quantity} />
          <Button.Group>
            <Button
              onClick={() => {
                setQuantity(quantity - 1);
              }}
              disabled={!quantity}
              type="primary"
              shape="circle"
              icon="minus"
            />
            <Button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
              type="primary"
              shape="circle"
              icon="plus"
            />
          </Button.Group>
        </Fragment>
      ]}
    >
      <Card.Meta
        title={props.name}
        description={props.ingredients.join(", ")}
      />
    </Card>
  );
};

Dish.defaultProps = {
  name: "Unknown"
};

Dish.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Dish;
export { Quantity };
