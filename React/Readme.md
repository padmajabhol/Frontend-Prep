## 1. Counter

```jsx
import { useState, useRef } from 'react';

const [value, setValue] = useState(0);

const step = useRef(1);

const setStep = (value: number) => {
  step.current = value;
}

const decrement = () => {
  setValue((state) => state - step.current);
}

const increment = () => {
  setValue((state) => state + step.current);
}

const reset = () => {
  setValue(0);
}

const Counter = () => {
  return (
    <div>
      <h2>{value}</h2>
    <div>
      <button onClick={decrement}>
        _
      </button>
      <button onClick={increment}>
        +
      </button>
    <div>
    <div>
      <label>
        Increment of decrement by:
      </label>
      <input
        type="number"
        defaultValue={step.current}
        onChange={(e) => setStep(e.target.valueAsNumber)}
      />
    </div>
    <div>
      <button onClick={reset}>
        Reset
      </button>
    </div>

    </div>
  )
}
```

## 2. BMI Calculator
```jsx
import { useState } from 'react';
const BMICalculator = () => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [BMI, setBMI] = useState(null);

  const handleChangeWeight = () => {
    setWeight(e.target.valueAsNumber);
  }

  const handleChangeHeight = () => {
    setHeight(e.target.valueAsNumber);
  }

  const calculateBMI = () => {
    const value = (weight / ((height * height)/10000)).fixedTo(2);
    setBMI(value)
  }



  return (
    <div>
      <div>
        <label htmlFor="weight">
          Enter weight:
        </label>
        <input type="number" onChange={handleChangeWeight}/>
      </div>
      <div>
        <label htmlFor="height">
          Enter height:
        </label>
        <input type="number" onChange={handleChangeHeight} />
      </div>
      <button onClick={calculateBMI}>
        Calculate BMI
      </button>
      {BMI}
    </div>
  )

}

export default BMICalculator;
```