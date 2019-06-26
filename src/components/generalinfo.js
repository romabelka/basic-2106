import React from "react";
import { Card } from "antd";

export default function GeneralInfo({ restaurant }) {
  return (
    <Card
        title="General info"
        cover={<img alt="Restaurant" src={restaurant.image}/>}>
    </Card>
  );
}