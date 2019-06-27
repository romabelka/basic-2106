import React from "react";
import { Typography, Rate } from "antd";

export default function Review({ review, isOpen, onBtnClick }) {
  const reviewBody = isOpen && (
    <>
      <p>{review.text}</p>
      <p>{review.rating}</p>
    </>
  );
  return (
    <div>
      <Typography.Text strong onClick={onBtnClick}>
        {review.user}
      </Typography.Text>
      {reviewBody}
    </div>
  );
}
