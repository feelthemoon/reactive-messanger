const initialState = {
    items: [],
    isLoading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, {type, payload}) => {
    switch (type) {
        case "MESSAGES:SET_ITEMS":
            return {
                ...state,
                items: payload,
                isLoading: false
            };
        case "MESSAGES:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
}
