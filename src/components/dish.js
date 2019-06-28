import React from "react";
import { Card, Button } from "antd";

function Dish(props) {
  return (
    <Card
      bordered
      actions={[
        `$${props.price}`,
        <>
          <span style={{ margin: "0 12px" }}>{0}</span>
          <Button.Group>
            <Button type="primary" shape="circle" icon="minus" />
            <Button type="primary" shape="circle" icon="plus" />
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

export default Dish;
