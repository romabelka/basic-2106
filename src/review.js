import React from "react";
import { List } from "antd";

export default function Review({ review }) {
  return (
    <List.Item>
      <List.Item.Meta title={review.user} />
      {review.text}
      <br />
      Rating: {review.rating}
    </List.Item>
  );
}
