import React, { useState } from 'react';
import './protein.css';
import { Link } from 'react-router-dom';
const ProteinCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [selectedActivity, setSelectedActivity] = useState('Sedentary - Little or No Exercise');

  const activityOptions = [
    'Sedentary - Little or No Exercise',
    'Light - Exercise 1-3 Times/Week',
    'Moderate - Exercise 4-5 Times/Week',
    'Very Active - Intense Exercise 6-7 Times/Week',
    'Athlete / Extra Active - Very Intense Exercise or Physical Job'
  ];

  const handleActivityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedActivity(event.target.value);
  };

  return (
    <div className="homepage">
      <header className="header d-flex justify-content-between align-items-center px-4 py-2">
        <div className="logo">Healio</div>
        <nav>
          <Link to="/Calculator" className="mx-3 text-dark">Calculator</Link>
          <Link to="#symptom-checker" className="mx-3 text-dark">Symptom Checker</Link>
          <Link to="/Consultation" className="mx-3 text-dark">Consultation</Link>
        </nav>
        <div className="login">
          <button className="btn btn-primary">Login/Signup</button>
        </div>
      </header>
      <div className="bmi-calculator">
        <h1 className="title">TDEE Calculator</h1>

        <div className="form">
          {/* Gender Selection */}
          <div className="form-group">
            <label>Gender</label>
            <div className="gender-options">
              <button
                className={`gender-btn ${gender === 'male' ? 'active' : ''}`}
                onClick={() => setGender('male')}
              >
                Male
              </button>
              <button
                className={`gender-btn ${gender === 'female' ? 'active' : ''}`}
                onClick={() => setGender('female')}
              >
                Female
              </button>
            </div>
          </div>

          {/* Age Input */}
          <div className="form-group">
            <label>Age</label>
            <input type="number" placeholder="Years" className="input" />
          </div>

          {/* Weight Input */}
          <div className="form-group">
            <label>Weight</label>
            <input type="number" placeholder="Kg" className="input" />
          </div>

          {/* Height Input */}
          <div className="form-group">
            <label>Height</label>
            <div className="height-inputs">
              <input type="number" placeholder="Feet" className="input" />
              <input type="number" placeholder="Inch" className="input" />
            </div>
          </div>

          {/* Activity Dropdown */}
          <div className="form-group">
            <label htmlFor="activity">Activity Level</label>
            <select
              id="activity"
              className="input"
              value={selectedActivity}
              onChange={handleActivityChange}
            >
              {activityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button className="reset-btn">Reset</button>
            <button className="calculate-btn">Calculate</button>
          </div>
        </div>

        {/* Description Section */}
        <div className="description">
          <h2>Total Daily Energy Expenditure (TDEE) Calculator</h2>
          <p>
          Total Daily Energy Expenditure (TDEE) represents the overall caloric intake required by your body each day to maintain your current weight.
          This includes all the calories burned through daily activities, including basic bodily functions, physical activity, and the food's thermic effect (the energy required to digest and process food). Knowing your TDEE can assist you in weight management by offering valuable information on the caloric intake required to maintain, reduce, or increase your weight.
          {/* Components of TDEE: Basal Metabolic Rate (BMR), Physical Activity Level (PAL), Thermic Effect of Food (TEF) */}

          </p>
        </div>
      </div>
         {/* Footer Section */}
   <footer className="footer py-4">
        <div className="container text-center">
          <p>© 2024 Healio. All rights reserved. | 
            <Link to="/terms" className="mx-3 text-dark">Terms & Conditions</Link> | 
            <Link to="/privacy" className="mx-3 text-dark">Privacy Policy</Link> | 
            <Link to="/contact" className="mx-3 text-dark">Contact</Link>
          </p>
          <p>Your health is our top priority. Healio provides 24/7 access to healthcare services. Connect with specialists from the comfort of your home.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProteinCalculator;
