import {normalizedReviews} from "../fixtures"
import { ADD_REVIEW } from "../constants";

const DefaultReviews = normalizedReviews.reduce (
    (acc, item) => (
        {
            ...acc,
            [item.id]: item
        }
    ),
    {}
);

export default (reviews = DefaultReviews, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_REVIEW:
            let newReview = {
                [payload.reviewId]: { 
                    id: payload.reviewId,
                    userId: payload.userId,
                    text: payload.reviewtext,
                     rating: payload.rating }
            }
         return {
            ...reviews,
            ...newReview
         };
        default: 
            return reviews;
    }
};