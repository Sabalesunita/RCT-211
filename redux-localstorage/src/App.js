import TestComponent from "./containers/testcomponents";
import "./App.css";
import Counter from "./containers/counter";

export default function App() {
  return (
    <div className="App">
   <Counter/>
      <TestComponent />
    </div>
  );
}