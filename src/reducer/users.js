import { CREATE_USER } from "../constants";
import { normalizedUsers } from "../fixtures";
import { withKeyValue } from "../utils";

export default (users = withKeyValue(normalizedUsers), { type, payload }) => {
  if (type === CREATE_USER) {
    return {
      ...users,
      [payload.id]: payload
    };
  }

  return users;
};
