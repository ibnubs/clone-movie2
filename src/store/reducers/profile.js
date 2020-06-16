const initialState = {
    profile: ""
}

const profiles = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
        case "Get_Profile":
            return {
                ...state,
                profile: action.payload
            }

    }
}
export default profiles;