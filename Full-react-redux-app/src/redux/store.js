import { legacy_createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import  AuthReducer   from "./auth/AuthReducer";
import AppReducer   from "./app/reducer";

const rootReducer = combineReducers( {AuthReducer, AppReducer})
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware( thunk)))

export {store}