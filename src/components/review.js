import React from "react";
import { Button } from "antd";

export default function Review({ review, isOpen, onBtnClick }) {
  const reviewBody = isOpen && (
    <>
      <p>
        comment: <span className="fw-bold">{review.text}</span>
      </p>
      <p>
        rating: <span className="fw-bold">{review.rating}</span>
      </p>
    </>
  );
  return (
    <ul>
      <li>{review.user}</li>
      <Button type="dashed" onClick={onBtnClick}>
        {" "}
        {isOpen ? "hide review" : "show review"}
      </Button>
      {reviewBody}
    </ul>
  );
}
