
const initialState = {
    isAuthenticate: false,
    names: "",
    emails: "",
    passwords: ""
}

const regis = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
        case "SUCCESS_REGIS":
            return {
                ...state,
                isAuthenticate: true,
                names: action.payload,
                emails: action.payload,
                passwords: action.payload

            }
        case "FAILED_REGIS":
            return {
                ...state,
                isAuthenticate: false,
                names: "",
                emails: "",
                passwords: ""
            }

    }
}
export default regis;