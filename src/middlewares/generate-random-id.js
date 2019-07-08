import uuid from "uuid/v4";

export default store => next => action => {
  const { generateId } = action;
  if (!generateId) {
    next();
  } else {
    next({ generatedId: uuid() });
  }
};
