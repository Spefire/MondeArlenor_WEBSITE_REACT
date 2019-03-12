const initialState = {
    currentLocation: "/"
};

const reducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case "CHANGE_LOCATION":
            newState.currentLocation = action.location;
            break;
        default:
            return state;
    }
    return newState;
}

export default reducer;