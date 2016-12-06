const thunk = ({ getState, dispatch }) => (next) => (action) => {
  if (typeof(action) === "function") return action(dispatch, getState);
  return next(action);
}

export default thunk;
