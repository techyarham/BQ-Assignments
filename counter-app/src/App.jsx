import { useState } from "react";
import "./App.css";
function App() {
  let [num, setNum] = useState(0);
  function increment() {
    setNum(num + 1);
  }
  function decrement() {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  function reset() {
    setNum((num = 0));
  }
  function plus5() {
    setNum(num + 5);
  }
  function minus5() {
    if (num >= 5) {
      setNum(num - 5);
    } else {
      setNum((num = 0));
    }
  }
  return (
    <div className="counter">
      <div className="head">
        <h1>Counter App</h1>
      </div>
      <div className="display">
        <h2>Count:{num}</h2>
      </div>
      <div className="butt">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <div className="five">
          <button onClick={plus5}>+ 5</button>
          <button onClick={minus5}>- 5</button>
        </div>
      </div>
    </div>
  );
}

export default App;
