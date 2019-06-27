import React from "react";
import { Button } from "antd";
import { useToggleOpen } from "./custom-hooks/use-toggle-open";

export default function ReviewList({ reviews }) {
  const { isOpen, toggleOpen } = useToggleOpen();

  const body = isOpen && (
    <div>
      Reviews:
      {reviews.map(review => (
        <div key={review.id}>
          <div>Author: {review.user}</div>
          <div>Message: {review.text}</div>
          <div>Rating: {review.rating}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {body}
      <Button onClick={toggleOpen} type="primary">
        {isOpen ? "Hide reviews" : "Show reviews"}
      </Button>
    </div>
  );
}
