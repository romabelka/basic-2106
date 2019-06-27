import React from 'react';
import { Button } from "antd";
import { useReviewsAccordion } from "./custom-hooks/use-reviews-accordion"
import reviewsAccordionDecorator from "./decorators/reviews-accordion";

export default function ReviewsList({ reviews }) {
  const { isOpenReviews, toogleOpenReviews } = useReviewsAccordion();
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
