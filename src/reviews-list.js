import React from "react";
import Review from "./review";
import { Button } from "antd";
import decorate from "./decorators/reviews-list";

function ReviewsList({ reviews, toggleExpandCollapse, isExpanded }) {
  const button = (
    <Button
      onClick={toggleExpandCollapse}
      icon={isExpanded() ? "eye-invisible" : "eye"}
      size="small"
    >
      {isExpanded() ? "hide" : "show"}
    </Button>
  );

  let reviewsBody = isExpanded() && (
    <ul>
      {reviews.map(review => (
        <li>
          <Review
            key={review.id}
            id={review.id}
            user={review.user}
            text={review.text}
            rating={review.rating}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div>
        Reviews: {reviews.length} {button}
      </div>
      {reviewsBody}
    </>
  );
}

export default decorate(ReviewsList);
