import React from "react";
import "./styles.css";
import bannerImage from "./doc.png";
import { Link } from 'react-router-dom';

import doctorIcon from './images/dochome.png';
import labIcon from './images/lab.png';
import hospitalIcon from './images/hospi.png';
import medicalStoreIcon from './images/medi.png';
import ambulanceIcon from './images/ambulance.png';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Top Blue Line */}
      <div className="top-bar text-white text-center py-2">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>

      {/* Header Section */}
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

      {/* Banner Section */}
      <section className="banner d-flex flex-column flex-md-row align-items-center px-4 py-5">
        <div className="text-content">
          <h1>Skip the travel! WELCOME to</h1>
          <h1><b>
            <span className="text-primary">Health</span>
            <span className="text-primary2">Tech</span>
          </b></h1>
          <p>Connect instantly with a 24x7 specialist or video visit a particular doctor.</p>
          <button className="btn btn-primary">Consult Now</button>
        </div>
        <div className="image-container mt-4 mt-md-0">
          <img src={bannerImage} alt="Doctors" className="img-fluid" />
        </div>
      </section>

      {/* Search and Categories Section */}
      <section className="search-and-categories-container py-4">
        <div className="bg-white p-4 rounded shadow-sm mx-auto">
          {/* Search Section */}
          <div className="search-section mb-4">
            <div className="d-flex align-items-center">
              <input type="text" className="form-control me-3" placeholder="Ex. Doctor, Hospital" />
              <input type="text" className="form-control me-3" placeholder="Ex. Surgeon, Cardiologist" />
              <input type="text" className="form-control me-3" placeholder="Set your location" />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>

          {/* Categories Section */}
          <div className="categories text-center">
            <h3 className="mb-4">You may be looking for</h3>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {/* Doctors Button */}
              <button className="btn btn-outline-primary">
                <img src={doctorIcon} alt="Doctor" className="category-icon" />
                Doctors
              </button>

              {/* Labs Button */}
              <button className="btn btn-outline-primary">
                <img src={labIcon} alt="Lab" className="category-icon" />
                Labs
              </button>

              {/* Hospitals Button */}
              <button className="btn btn-outline-primary">
                <img src={hospitalIcon} alt="Hospital" className="category-icon" />
                Hospitals
              </button>

              {/* Medical Store Button */}
              <button className="btn btn-outline-primary">
                <img src={medicalStoreIcon} alt="Medical Store" className="category-icon" />
                Medical Store
              </button>

              {/* Ambulance Button */}
              <button className="btn btn-outline-primary">
                <img src={ambulanceIcon} alt="Ambulance" className="category-icon" />
                Ambulance
              </button>
            </div>
          </div>
        </div>
      </section>

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

export default HomePage;
