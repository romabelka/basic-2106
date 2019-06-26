import React, { useState } from "react";
import Review from "./review";
import { Button } from "antd";

export default function ReviewList({ reviews, isOpen }) {
  const [defaultOpen, setDefaultOpen] = useState(isOpen);
  const reviewlist =
    defaultOpen &&
    reviews.map(review => (
      <Review
        key={review.id}
        user={review.user}
        rating={review.rating}
        text={review.text}
      />
    ));
  return (
    <div>
      {reviewlist}
      <Button type="default" onClick={() => setDefaultOpen(!defaultOpen)}>
        {defaultOpen ? "Hide reviews" : "Open reviews"}
      </Button>
    </div>
  );
}
