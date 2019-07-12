import { normalizedUsers } from "../fixtures";
import { arrToMap } from "../utils";
import { Record } from "immutable";

const UserRecord = Record({
  id: null,
  name: null
});

const ReducerRecord = Record({
  entities: arrToMap(normalizedUsers, UserRecord)
});

export default (usersState = new ReducerRecord(), { type }) => {
  switch (type) {
    default:
      return usersState;
  }
};
