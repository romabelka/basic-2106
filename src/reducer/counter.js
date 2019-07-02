import { DECREMENT, INCREMENT } from "../constants";

export default (count = 10, action) => {
  switch (action.type) {
    case INCREMENT:
      return count + 1;
    case DECREMENT:
      return Math.max(count - 1, 0);

    default:
      return count;
  }
};
