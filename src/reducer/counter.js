export default (count = 10, action) => {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return Math.max(count - 1, 0);

    default:
      return count;
  }
};
