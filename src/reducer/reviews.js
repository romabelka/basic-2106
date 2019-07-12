import { arrToMap } from "../utils";
import { ADD_REVIEW, LOAD_ALL_REVIEWS, START, SUCCESS } from "../constants";
import { Record } from "immutable";

const ReviewRecord = Record({
  id: null,
  userId: null,
  text: null,
  rating: null
});

const ReducerRecord = Record({
  entities: arrToMap([], ReviewRecord),
  loading: false
});

export default (
  reviewState = new ReducerRecord(),
  { type, payload, response, id }
) => {
  switch (type) {
    case ADD_REVIEW:
      return reviewState.setIn(
        ["entities", id],
        new ReviewRecord({ ...payload.review, id })
      );

    case LOAD_ALL_REVIEWS + START:
      return reviewState.set("loading", true);

    case LOAD_ALL_REVIEWS + SUCCESS:
      return reviewState
        .set("entities", arrToMap(response, ReviewRecord))
        .set("loading", false);

    default:
      return reviewState;
  }
};
