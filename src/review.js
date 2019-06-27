import React from "react";
import { Rate, Typography } from "antd";

export default function Review({ user, text, rating }) {
  return (
    <>
      <h3 strong>{user}</h3>
      <Rate disabled defaultValue={rating} />
      <p>{text}</p>
    </>
  );
}
