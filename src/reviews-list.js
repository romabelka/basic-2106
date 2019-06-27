import React from 'react';
import { Button } from "antd";
import reviewsAccordionDecorator from "./decorators/reviews-accordion";

function ReviewsList({ reviews, isOpenReviews, toogleOpenReviews }) {
  const body = isOpenReviews && (
    <ul>
      {reviews.map( review => <li key={review.id}>{review.text}</li> )}
    </ul>
  );

  return (
    <div>
      <Button onClick={toogleOpenReviews} type="default">
        {isOpenReviews ? "close reviews" : "open reviews"}
      </Button>
      {body}
    </div>
  );
}

export default reviewsAccordionDecorator(ReviewsList);
