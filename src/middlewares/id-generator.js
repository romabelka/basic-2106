import { ADD_REVIEW } from "../constants";

export default store => next => action => {
  const uuidv1 = require("uuid/v1");

  if (action.type === ADD_REVIEW) {
    const texts = ["bad", "ok", "good", "very good", "excellent"];
    action.payload.reviewId = uuidv1();
    action.payload.reviewText = texts[action.payload.rating - 1];
  }

  next(action);
};
