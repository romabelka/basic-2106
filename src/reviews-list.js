import React from 'react';
import { Button } from "antd";
//import reviewsAccordionDecorator from "./decorators/reviews-accordion";

export default function ReviewsList({ reviews, isOpenReviews, onBtnOpenReviewsClick }) {
  const body = isOpenReviews && (
    <ul>
      {reviews.map( review => <li key={review.id}>{review.text}</li> )}
    </ul>
  );

  return (
    <div>
      <Button onClick={onBtnOpenReviewsClick} type="default">
        {isOpenReviews ? "close reviews" : "open reviews"}
      </Button>
      {body}
    </div>
  );
}
