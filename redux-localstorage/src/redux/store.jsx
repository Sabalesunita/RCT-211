import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer } from "../redux/app/reducer";
import { reducer as AuthReducer } from "../redux/auth/reducer";

const rootReducer = combineReducers({ mainApp: reducer, AuthReducer });

const logger1 = (store) => (next) => (action) => {
  console.log("Dispatching action 1 - a", next);
  const val = next(action);
  console.log("After return 1 - b", val);
  return val;
};

const logger2 = (store) => (next) => (action) => {
  console.log("Dispatching action 2 - c", action);
  const val = next(action);
  console.log("After return 2 - d", val);
  return val;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//to bring together ->

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger1, logger2))
);

export { store };