import { ERROR, START, SUCCESS } from "../constants";

export default store => next => async action => {
  const { callAPI, type, ...rest } = action;

  if (!callAPI) return next(action);

  try {
    next({ ...rest, type: type + START });

    const rawRes = await fetch(callAPI);
    const response = await rawRes.json();

    next({ ...rest, type: type + SUCCESS, response });
  } catch (error) {
    next({ ...rest, type: type + ERROR, error });
  }
};
