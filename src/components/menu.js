import React from "react";
import { Card } from "antd";

export default function Menu({ restaurant }) {
  return (
    <Card
      title="Menu items">
      {restaurant.menu.length}
    </Card>
  );
}