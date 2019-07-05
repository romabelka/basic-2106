import { SELECT_RAITING } from "./constants";

const initialValues = {
  items: [],
  filterValue: 0
};

export default (state = initialValues, action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_RAITING:
      return {
        ...state,
        filterValue: payload.rating
      };

    default:
      return state;
  }
};
