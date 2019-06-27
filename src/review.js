import React from "react";
import { Comment } from "antd";

export default function Review({ review, isOpen, onBtnClick }) {
  const author = `${review.user} Rating: ${review.rating}`;

  return <Comment author={author} content={review.text} />;
}
