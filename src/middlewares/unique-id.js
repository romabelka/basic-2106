import { ADD_RATING } from "../constants";
import uuidv1 from "uuid/v1";

export default () => next => action => {
  if (action.type === ADD_RATING) {
    let newAction = {
      ...action,
      payload: {
        ...action.payload,
        review: {
          ...action.payload.review,
          id: uuidv1(),
          userId: uuidv1()
        }
      }
    };

    next(newAction);
  } else {
    next(action);
  }
};
