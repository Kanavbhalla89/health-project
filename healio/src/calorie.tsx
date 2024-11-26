import React, { useState } from 'react';
import './calorie.css';
import { Link } from 'react-router-dom';

const ProteinCalculator: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState('Sedentary - Little or No Exercise');

  const activityOptions = [
    'Running',
    'Cycling',
    'Swimming',
    'Gym',
    'Home and Daily life Activities'
  ];

  const handleActivityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedActivity(event.target.value);
  };

  return (
    <div className="homepage">
      <header className="header d-flex justify-content-between align-items-center px-4 py-2">
        <div className="logo">Healio</div>
        <nav>
          <Link to="/calculator" className="mx-3 text-dark">Calculator</Link>
          <Link to="#symptom-checker" className="mx-3 text-dark">Symptom Checker</Link>
          <Link to="/consultation" className="mx-3 text-dark">Consultation</Link>
        </nav>
        <div className="login">
          <button className="btn btn-primary">Login/Signup</button>
        </div>
      </header>
      <div className="bmi-calculator">
        <h1 className="title">Calories burned Calculator</h1>

        <div className="form">
            
          {/* Activity Dropdown */}
          <div className="form-group">
            <label htmlFor="activity">Activity </label>
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

          {/* Age Input */}
          <div className="form-group">
            <label>Duration</label>
            <input type="number" placeholder="Hours" className="input" />
            <input type="number" placeholder="Minutes" className="input" />

          </div>

          {/* Weight Input */}
          <div className="form-group">
            <label>Weight</label>
            <input type="number" placeholder="Kg" className="input" />
          </div>


          {/* Buttons */}
          <div className="button-group">
            <button className="reset-btn">Reset</button>
            <button className="calculate-btn">Calculate</button>
          </div>
        </div>

        {/* Description Section */}
        <div className="description">
          <h2>Calories Burned Calculator</h2>
          <p>
          A calorie-burned calculator is a tool that helps estimate the number of calories an individual burns during physical activities or exercises. It is commonly used in fitness and weight management to track energy expenditure and plan balanced exercise routines.Here's a breakdown of the key components used in most calorie-burned calculators:</p>
          <p>Basal Metabolic Rate (BMR): The BMR represents the number of calories an individual's body needs to function at rest. It considers factors such as age, gender, height, and weight. The BMR provides an estimate of the calories required to sustain basic bodily functions, such as breathing and maintaining body temperature.</p>
<p>Activity Level: This factor takes into account the intensity of the activity being performed. Different activities require varying levels of effort, resulting in different rates of calorie expenditure. Activities are usually categorised into different intensity levels, such as sedentary, light, moderate, or vigorous.
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
