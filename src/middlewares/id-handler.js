import { ADD_REVIEW } from "../constants";
import { addReviewToRestaurant } from "../ac";
const uuidv4 = require("uuid/v4");

export default store => next => action => {
  if (action.type === ADD_REVIEW) {
    const id = uuidv4();
    store.dispatch(addReviewToRestaurant(action.payload.restaurantId, id));
    action.payload.review.id = id;
  }
  next(action);
};
