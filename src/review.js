import React from "react";
import { Rate } from "antd";

export default function Review({ user, text, rating }) {
  return (
    <div>
      <h3>{user}</h3>
      <Rate disabled defaultValue={rating} />
      <p>{text}</p>
    </div>
  );
}
