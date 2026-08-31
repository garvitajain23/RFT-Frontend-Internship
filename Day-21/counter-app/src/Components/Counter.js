import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount(count + step);

  const decrement = () => {
    if (count - step < 0) return;
    setCount(count - step);
  };

  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>Counter App</h1>

      <div className="count-display">{count}</div>

      <div className="buttons">
        <button onClick={decrement}>− Decrement</button>
        <button onClick={reset} className="reset">↺ Reset</button>
        <button onClick={increment}>+ Increment</button>
      </div>

      <div className="step-control">
        <label>Step: {step}</label>
        <input
          type="range"
          min="1"
          max="20"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <div className="step-presets">
          {[1, 5, 10].map((s) => (
            <button
              key={s}
              onClick={() => setStep(s)}
              className={step === s ? "active" : ""}
            >
              +{s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Counter;