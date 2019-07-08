import { normalizedUsers } from "../../fixtures";

const defaultUsers = normalizedUsers.reduce(
  (acc, item) => ({
    ...acc,
    [item.id]: item
  }),
  {}
);

export default (users = defaultUsers, { type }) => {
  switch (type) {
    default:
      return users;
  }
};
