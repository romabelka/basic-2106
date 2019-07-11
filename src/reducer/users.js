import { normalizedUsers } from "../fixtures";
import { arrToMap } from "../utils";
import { fromJS, Map } from "immutable";
import { ENTITIES } from "../constants";

const defaultUsers = new Map({
  [ENTITIES]: fromJS(arrToMap(normalizedUsers))
});

export default (users = defaultUsers, { type }) => {
  switch (type) {
    default:
      return users;
  }
};
