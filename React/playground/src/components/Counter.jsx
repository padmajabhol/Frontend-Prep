import { useState, useRef } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const step = useRef(1);

  const setStep = (value) => {
    step.current = value;
  };

  const decrement = () => {
    setValue((state) => state - step.current);
  };

  const increment = () => {
    setValue((state) => state + step.current);
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <div>
      <h2>{value}</h2>
      <section>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </section>
      <label htmlFor="step">Increment or decrement by</label>
      <input
        type="number"
        defaultValue={step.current}
        onChange={(e) => setStep(e.target.valueAsNumber)}
        title="Step Value"
      />
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
