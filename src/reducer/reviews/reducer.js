import { arrToMap } from "../../utils";
import { ADD_REVIEW, LOAD_ALL_REVIEWS } from "./constants";
import { SUCCESS } from "../restaurants/constants";

const defaultReviews = {};

export default (reviews = defaultReviews, { type, payload, id, response }) => {
  switch (type) {
    case ADD_REVIEW:
      return { ...reviews, [id]: { ...payload.review, id } };

    case LOAD_ALL_REVIEWS + SUCCESS:
      return arrToMap(response);

    default:
      return reviews;
  }
};
