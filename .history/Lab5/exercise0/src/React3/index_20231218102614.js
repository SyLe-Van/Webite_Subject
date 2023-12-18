// import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./style.css";

const React3 = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div class="react3">
      <div className="result">{counter}</div>
      <button onClick={increaseCounter} size="lg">
        Click
      </button>
    </div>
  );
};

export default React3;
