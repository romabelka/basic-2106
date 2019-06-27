import React, { useState } from "react";
import Review from "./review";
import { Button, Divider } from "antd";
import DecorateToggleOpen from "./decorators/decorate-toggleOpen";

function ReviewList({ reviews, isOpened, toggleOpen }) {
  const reviewlist =
    isOpened &&
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
      <Button
        type="default"
        onClick={toggleOpen}
        icon={isOpened ? "eye-invisible" : "eye"}
        size="small"
      >
        {isOpened
          ? "Hide reviews"
          : `Open ${reviews.length} review${reviews.length > 1 ? "s" : ""}`}
      </Button>
    </div>
  );
}

export default DecorateToggleOpen(ReviewList);
