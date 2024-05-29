/* eslint-disable no-unused-vars */
import { useState } from "react";

const BMI = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState();
  const [BMIvalue, setBMIvalue] = useState();
  const handleChangeHeight = (e) => {
    setHeight(e.target.valueAsNumber);
  };

  const handleChangeWeight = (e) => {
    setWeight(e.target.valueAsNumber);
  };

  const calculateBMI = () => {
    if (height && weight) {
      const value = (weight / ((height * height) / 10000)).toFixed(2);
      setBMIvalue(value);
    }
  };

  console.log(height, weight, BMIvalue);

  return (
    <div>
      <div>
        <label htmlFor="height">Height(cm)</label>
        <input type="number" name="height" onChange={handleChangeHeight} />
      </div>
      <div>
        <label htmlFor="weight">Weight</label>
        <input type="number" name="weight" onChange={handleChangeWeight} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      BMI Value: {BMIvalue}
    </div>
  );
};

export default BMI;
