import React from "react";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import Review from "./review";

function ReviewsList({ reviews, isItemOpen, toggleOpenItem }) {
  return (
    <div>
      {reviews.map(review => (
        <Review
          key={review.id}
          review={review}
          isOpen={isItemOpen(review.id)}
          onBtnClick={toggleOpenItem(review.id)}
        />
      ))}
    </div>
  );
}

export default accordionDecorator(ReviewsList);
