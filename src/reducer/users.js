import { normalizedUsers } from "../fixtures";
import { withKeyValue } from "../utils";

export default (users = withKeyValue(normalizedUsers)) => {
  return users;
};
