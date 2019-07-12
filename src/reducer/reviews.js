import { normalizedReviews } from "../fixtures";
import { arrToMap } from "../utils";
import { ADD_REVIEW } from "../constants";
import { Record } from "immutable";

const ReviewRecord = Record({
  id: null,
  userId: null,
  text: null,
  rating: null
});

const ReducerRecord = Record({
  entities: arrToMap(normalizedReviews, ReviewRecord)
});

export default (reviewState = new ReducerRecord(), { type, payload, id }) => {
  switch (type) {
    case ADD_REVIEW:
      return { ...reviewState, [id]: { ...payload.review, id } };

    default:
      return reviewState;
  }
};
