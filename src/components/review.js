import React from "react";

export default function Review({ review }) {
  return (
    <ul className="reviews__list">
      <li className="reviews__item">
        <p>Username:</p>
        <span className="fw-bold">{review.user}</span>
      </li>
      <li className="reviews__item">
        <p>Description:</p>
        <span className="fw-bold">{review.text}</span>
      </li>
      <li className="reviews__item">
        <p>Rating:</p>
        <span className="fw-bold">{review.rating}</span>
      </li>
    </ul>
  );
}
