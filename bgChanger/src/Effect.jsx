import { useState, useEffect } from "react";

function Timer() {
  const [counter, setCounter] = useState("");

  useEffect(() => {
    let currentDate = new Date();
    setCounter(
      `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
    );
    setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  });

  return <h2>Current Time: {counter}</h2>;
}

export default Timer;
