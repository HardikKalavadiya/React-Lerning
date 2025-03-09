import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter >= 20) {
      setCounter((counter = 20));
    } else {
      counter = counter + 1;
      setCounter(counter);
    }
  };

  const reduceValue = () => {
    if (counter <= 1) {
      setCounter((counter = 0));
    } else {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>React Development Learning</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={reduceValue}>Remove Value</button>
    </>
  );
}

export default App;
