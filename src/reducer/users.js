import { normalizedUsers } from "../fixtures";

const users = normalizedUsers.reduce(function(acc, current) {
  return { ...acc, [current.id]: current };
}, {});

export default (state = users, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
