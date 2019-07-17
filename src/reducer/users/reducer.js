import { Record } from "immutable";
import { arrToMap } from "../../utils";

const UserRecord = Record({
  id: null,
  name: null
});

const ReducerRecord = Record({
  entities: arrToMap([], UserRecord)
});

export default (usersState = new ReducerRecord(), { type }) => {
  switch (type) {
    default:
      return usersState;
  }
};
