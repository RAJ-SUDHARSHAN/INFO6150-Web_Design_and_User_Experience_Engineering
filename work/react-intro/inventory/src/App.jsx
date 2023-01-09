import "./App.css";
import { useState } from "react";
import Count from "./Reorder";

function App() {
  let [count, setCount] = useState(5);

  function onReorder() {
    setCount(5);
  }

  return (
    <div className="App">
      <div>
        <p>Inventory count: {count}</p>

        <button className="Increment button" onClick={() => {
          setCount(count + 1);
        }}>
          Increase
        </button>

        <button className="Decrement button" onClick={() => {
          setCount(count - 1);
        }} disabled={!count}>
          Decrease
        </button>

        {count === 0 ? <Count onReorder={onReorder} /> : ''}
      </div>
    </div>
  );
}

export default App;
