import { ERROR, START, SUCCESS } from "../constants";

export const arrToMap = arr =>
  arr.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: item
    }),
    {}
  );

export const eventToEndpoint = (
  eventName,
  endPoint
) => () => async dispatch => {
  try {
    dispatch({ type: eventName + START });

    const rawRes = await fetch(endPoint);
    const response = await rawRes.json();

    dispatch({ type: eventName + SUCCESS, response });
  } catch (error) {
    dispatch({ type: eventName + ERROR, error });
  }
};
