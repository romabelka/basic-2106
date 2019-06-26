import React, { useState } from 'react';
import { Button } from "antd";

export default function Reviews({ reviews }) {
  const [isOpenReviews, setOpenReviews] = useState(false);
  const body = isOpenReviews && (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>{review.text}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <Button
        onClick={() => setOpenReviews(!isOpenReviews)}
        type="default"
      >
        {isOpenReviews ? "close reviews" : "open reviews"}
      </Button>
      {body}
    </div>
  );
}
