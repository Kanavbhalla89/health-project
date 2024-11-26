import React, { useState } from 'react';
import './perioddate.css';
import { Link } from 'react-router-dom';

const DueDate: React.FC = () => {
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
      <h1 className="title"> Period Due Date Calculator</h1>

      <div className="form">
        <div className="form-group">
          <label>No of Days Period Lasted</label>
          <input type="number" placeholder="Enter number of days" className="input" />
        </div>

        <div className="form-group">
          <label>First Day of Last Period</label>
          <input type="date" className="input" />
        </div>

        <div className="form-group">
          <label>Average Length of Cycle</label>
          <div className="height-inputs">
            <input type="number" placeholder="20 days" className="input" />
          </div>
        </div>

        <div className="button-group">
          <button className="reset-btn">Reset</button>
          <button className="calculate-btn">Calculate</button>
        </div>
      </div>

      <div className="description">
        <h2>What is a Period Due Date Calculator?</h2>
        <p>
        Besides being an indicator of reproductive health, having a regular period tells you a lot about the body's overall well-being. While consistent cycles indicate hormonal balance and general health, irregular periods may suggest underlying issues that need attention from a healthcare provider. Keeping track of your menstrual cycle, therefore, not only helps you understand your fertility but also provides insights into your overall health.
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

export default DueDate;

