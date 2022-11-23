import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import jsonReducer from "../reducer/jsonReducer";

const rootReducer = combineReducers({
    jsonReducer
});


const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export default store;