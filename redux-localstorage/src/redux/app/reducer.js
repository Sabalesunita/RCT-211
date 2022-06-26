import * as types from "./action";
import { loadData, saveData } from "../../utils/localStorage";
const initialState = {
  counter: loadData("counter") || 0,
  todos: { id: 1, title: "Buy Milk", status: false }
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.INCREMENT_COUNTER:{
      let newCount = state.counter + payload;
      saveData("counter", newCount);
      return {
        ...state,
        counter: newCount
      };
    }
    case types.DECREMENT_COUNTER:{
        let newCount = state.counter - payload;
        saveData("counter", newCount);
        return {
          ...state,
          counter: newCount
        };
    }
    default:
      return state;
  }
};
export { reducer };