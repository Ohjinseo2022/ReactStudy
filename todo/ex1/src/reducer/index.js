export const reducer = function reducer(state, action) {
  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";

  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
