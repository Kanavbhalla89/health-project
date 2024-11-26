import React from 'react';
import './ConsultationPage.css';

const ConsultationPage: React.FC = () => {
  return (
    <div className="consultation-page">
      <header className="header">
        <div className="logo">HealthTech</div>
        <nav className="nav">
          <a href="#" className="nav-link">Calculator</a>
          <a href="#" className="nav-link">Symptom Checker</a>
          <a href="#" className="nav-link">Consultation</a>
          <button className="login-btn">Login/Signup</button>
        </nav>
      </header>

      <main className="content">
        {/* Left Section */}
        <section className="doctor-details">
          <div className="doctor-card">
            <div className="doctor-header">
              <img src="doctor-image.png" alt="Doctor" className="doctor-image" />
              <div className="doctor-info">
                <h2>Dr. Shantanu Jambhekar</h2>
                <p className="specialization">Dentist</p>
                <p>16 years experience overall</p>
                <p>
                  <strong>Pare, Mumbai</strong>
                  <br />
                  Smilessence Center for Advanced Dentistry + 1 more
                </p>
              </div>
            </div>
            <div className="doctor-pricing">
              <span className="consultation-fee">
                <strong>FREE</strong> <del>₹500</del> Consultation fee at clinic
              </span>
              <span className="availability">Available Today</span>
              <button className="book-appointment-btn">Book First Appointment</button>
            </div>
            <div className="doctor-rating">
              <span className="rating">99%</span>
              <span className="patient-stories">93 Patient Stories</span>
            </div>
          </div>

          <div className="appointment-slots">
            <div className="tabs">
              <button className="tab active">Today</button>
              <button className="tab">Tomorrow</button>
              <button className="tab">Fri, 5 May</button>
            </div>
            <div className="slots">
              <div className="time-slot">11:30 AM</div>
              <div className="time-slot">12:00 PM</div>
              <div className="time-slot">12:30 PM</div>
              <div className="time-slot">01:00 PM</div>
              <div className="time-slot">02:00 PM</div>
              <div className="time-slot">06:00 PM</div>
              <div className="time-slot">06:30 PM</div>
              <div className="time-slot">07:00 PM</div>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <aside className="location-section">
          <div className="location-card">
            <h3>Provide current location to see Dentist near you</h3>
            <p>You are seeing results from Mumbai.</p>
            <div className="location-options">
              <button className="location-btn">Andheri West</button>
              <button className="location-btn">Borivali West</button>
              <button className="location-btn">Bandra West</button>
            </div>
            <div className="location-buttons">
              <button className="search-location-btn">Search Location</button>
              <button className="current-location-btn">Current Location</button>
            </div>
          </div>
          <div className="offer-card">
            <h3>This World Oral Health Day, Get a FREE Appointment*</h3>
            <p>with Top Dentists.</p>
            <button className="limited-offer-btn">Limited Period Offer</button>
            <p className="terms">*T&C Apply - only consultative fee. Procedures/surgeries not covered.</p>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default ConsultationPage;
