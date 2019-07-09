import { CREATE_NEW_USER_REVIEW } from "../constants";
import { createUser, createReview, addReviewToRestaurant } from "../ac";
import { getUuid } from "../utils";

export default store => next => action => {
  const { type, payload } = action;

  if (type === CREATE_NEW_USER_REVIEW) {
    const newUserId = getUuid();
    store.dispatch(
      createUser({
        id: newUserId,
        name: payload.name
      })
    );

    const newReviewId = getUuid();
    store.dispatch(
      createReview({
        id: newReviewId,
        userId: newUserId,
        text: payload.text,
        rating: payload.rating
      })
    );

    store.dispatch(
      addReviewToRestaurant({
        restaurantId: payload.restaurantId,
        reviewId: newReviewId
      })
    );
  }

  next(action);
};
