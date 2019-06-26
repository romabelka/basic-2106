import React from "react";
import Review from "./review";
import { List } from "antd";

export default function ReviewsList({ reviews }) {
  return (
    <List bordered>
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </List>
  );
}
