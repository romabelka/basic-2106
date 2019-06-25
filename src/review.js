import React from "react";
import { Typography, Rate } from "antd";

export default function({ id, user, text, rating }) {
  return (
    <>
      <Typography.Text strong>{user}: </Typography.Text>
      <Typography.Text type="secondary">Rating: </Typography.Text>
      <Rate disabled defaultValue={rating} />
      <Typography.Paragraph>{text}</Typography.Paragraph>
    </>
  );
}
