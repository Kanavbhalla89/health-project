import React, { useState } from 'react';
import './BMICalculator.css';

function BMICalculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [bmi, setBmi] = useState('');
  const [bmiInterpretation, setBmiInterpretation] = useState('');

  const calculateBMI = () => {
    const totalHeightInches = (heightFeet * 12) + heightInches;
    const heightInMeters = totalHeightInches * 0.0254;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBMI.toFixed(1));

    if (calculatedBMI < 18.5) {
      setBmiInterpretation('Underweight');
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      setBmiInterpretation('Normal weight');
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      setBmiInterpretation('Overweight');
    } else {
      setBmiInterpretation('Obese');
    }
  };

  const resetForm = () => {
    setGender('male');
    setAge('');
    setWeight('');
    setHeightFeet('');
    setHeightInches('');
    setBmi('');
    setBmiInterpretation('');
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>

      <div className="form-group">
        <label>Gender:</label>
        <div className="radio-group">
          <input type="radio" value="male" checked={gender === 'male'} onChange={() => setGender('male')} /> Male
          <input type="radio" value="female" checked={gender === 'female'} onChange={() => setGender('female')} /> Female
        </div>
      </div>

      <div className="form-group">
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} /> Years
      </div>

      <div className="form-group">
        <label>Weight:</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} /> Kg
      </div>

      <div className="form-group">
        <label>Height:</label>
        <input type="number" value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} /> Feet
        <input type="number" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} /> Inches
      </div>

      <div className="button-group">
        <button onClick={resetForm}>Reset</button>
        <button onClick={calculateBMI}>Calculate</button>
      </div>

      {bmi && (
        <div className="result">
          <p>Your BMI is: {bmi}</p>
          <p>Interpretation: {bmiInterpretation}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;