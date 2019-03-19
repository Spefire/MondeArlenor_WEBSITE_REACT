const initialState = {
  currentUser: null,
  currentLocation: "/",
  currentLocationAPI: "http://localhost:3002/api/v1/"
};

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case "CHANGE_LOCATION":
      newState.currentLocation = action.location;
      break;
    case "SET_USER":
      newState.currentUser = action.user;
      break;
    default:
      return state;
  }
  return newState;
};

export default reducer;
