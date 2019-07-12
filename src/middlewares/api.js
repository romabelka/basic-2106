import { ERROR, START, SUCCESS } from "../reducer/restaurants/constants";

export default store => next => async action => {
  const { callAPI, type, ...rest } = action;

  if (!callAPI) return next(action);

  try {
    next({ ...rest, type: type + START });

    const rawResponse = await fetch(callAPI);
    const response = await rawResponse.json();

    next({ ...rest, type: type + SUCCESS, response });
  } catch (error) {
    next({ ...rest, type: type + ERROR, error });
  }
};
