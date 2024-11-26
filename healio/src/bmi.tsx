import React, { useState } from 'react';
import './bmi.css';
import { Link } from 'react-router-dom';

const BMICalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female' | null>(null);

  return (
    <div className="homepage">
        <header className="header d-flex justify-content-between align-items-center px-4 py-2">
        <div className="logo">Healio</div>
        <nav>
          <a href="/Calculator" className="mx-3 text-dark">
            Calculator
          </a>
          <a href="#symptom-checker" className="mx-3 text-dark">
            Symptom Checker
          </a>
          <a href="/Consultation" className="mx-3 text-dark">
            Consultation
          </a>
        </nav>
        <div className='login'>
        <button className="btn btn-primary">Login/Signup</button>
        </div>
      </header>
    <div className="bmi-calculator">
      <h1 className="title">BMI Calculator</h1>

      <div className="form">
        <div className="form-group">
          <label>Gender</label>
          <div className="gender-options">
            <div className='button-group'>
            <button
              className={`gender-btn ${gender === 'male' ? 'active' : ''}`}
              onClick={() => setGender('male')}
            >
               Male
            </button>
            </div>
            <div className='button-group'>
            <button
              className={`gender-btn ${gender === 'female' ? 'active' : ''}`}
              onClick={() => setGender('female')}
            >
               Female
            </button>
            </div>
          </div>
          
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" placeholder="Years" className="input" />
        </div>

        <div className="form-group">
          <label>Weight</label>
          <input type="number" placeholder="Kg" className="input" />
        </div>

        <div className="form-group">
          <label>Height</label>
          <div className="height-inputs">
            <input type="number" placeholder="Feet" className="input" />
            <input type="number" placeholder="Inch" className="input" />
          </div>
        </div>

        <div className="button-group">
          <button className="reset-btn">Reset</button>
          <button className="calculate-btn">Calculate</button>
        </div>
      </div>

      <div className="description">
        <h2>Healthcare BMI Calculator</h2>
        <p>
          Understanding and maintaining a healthy weight is a crucial part of
          overall health, and that's where our BMI calculator comes in. A simple
          yet powerful tool, our BMI calculator helps individuals assess their body
          mass index, enabling a quick evaluation of their weight in relation to
          their height and offering insights into potential health implications.</p><p>Body Mass Index (BMI) is a widely recognized measurement of an individual's weight in relation to their height. This metric is calculated by dividing a person's weight in kilograms by the square of their height in metres.
          Ready to take the first step towards a healthier you? Try our BMI
          calculator now!
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

export default BMICalculator;

