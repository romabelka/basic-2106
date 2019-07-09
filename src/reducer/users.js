import { normalizedUsers } from "../fixtures";
import { arrToMap } from "../utils";

const defaultUsers = arrToMap(normalizedUsers);

export default (users = defaultUsers, { type }) => {
  switch (type) {
    default:
      return users;
  }
};
