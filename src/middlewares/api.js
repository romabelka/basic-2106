export default store => next => async action => {
  const { callAPI } = action;

  if (!callAPI) return next(action);

  const rawRes = await fetch(callAPI);
  const response = await rawRes.json();

  next({ ...action, response });
};
