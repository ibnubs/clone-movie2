const initialState = {
    review: ""
}

const review = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
        case "Get_Todos":
            return {
                ...state,
                review: action.payload
            }

    }
}
export default review;