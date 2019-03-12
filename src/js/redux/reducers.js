const initialState = {
    currentLocation: "/",
    currentSeeCartMode: false,
    currentProductsSortMode: "ASC"
};

const reducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case "CHANGE_LOCATION":
            newState.currentLocation = action.location;
            break;
        case "SEE_CART_MODE":
            newState.currentSeeCartMode = action.seeCartMode;
            break;
        case "CHANGE_PRODUCTS_SORTMODE":
            newState.currentProductsSortMode = action.productsSortMode;
            break;
        default:
            return state;
    }
    return newState;
}

export default reducer;