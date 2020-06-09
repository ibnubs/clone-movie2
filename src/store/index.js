import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk] // thunk utk panggil middleware

const Store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware) // middleware adalah jembatan utk ke API
    )

)
export default Store;