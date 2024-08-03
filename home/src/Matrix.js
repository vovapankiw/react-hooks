import React, { useState } from "react";
import MATRIX from "./data/matrix";
import { useDynamicTransition } from "./hooks";

const minimumDelay = 10;
const minimumIncrement = 1;

export default function Matrix() {
  const [delay, setDelay] = useState(500);
  const [increment, setIncrement] = useState(1);
  const index = useDynamicTransition({
    delay,
    increment,
    length: MATRIX.length,
  });

  const updateDelay = (event) => {
    const delay = Number(event.target.value);

    setDelay(delay < minimumDelay ? minimumDelay : delay);
  };

  const updateIncrement = (event) => {
    const increment = Number(event.target.value);

    setIncrement(increment < minimumIncrement ? minimumIncrement : increment);
  };

  return (
    <div className="Gallery">
      <img src={MATRIX[index]} alt="gallery" />
      <div className="multiform">
        <div>
          Matrix options
          <input type="number" onChange={updateDelay} />
        </div>
        <div>
          Matrix increment:
          <input type="number" onChange={updateIncrement} />
        </div>
      </div>
    </div>
  );
}
