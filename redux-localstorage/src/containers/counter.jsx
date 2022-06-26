import { useDispatch, useSelector } from "react-redux";
import { incrementCounter ,decrementCounter} from "../redux/app/action";

const Counter = () => {
  const counter = useSelector((store) => store.mainApp.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    const actionObject = incrementCounter(10);
    dispatch(actionObject);
  };
  const handledecrement = () => {
    const actionObject = decrementCounter(10);
    dispatch(actionObject);
  };
  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handledecrement}>Decrement</button>
    </>
  );
};

export default Counter;