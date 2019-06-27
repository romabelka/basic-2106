import { useState } from "react";

export function useReviewsAccordion() {
  const [isOpenReviews, setOpenReviews] = useState(false);
  const toogleOpenReviews = () => setOpenReviews(!isOpenReviews);

  return { isOpenReviews, toogleOpenReviews };
}
