import './Consulation.css';
import { Link } from 'react-router-dom';

// Import images from the folder
import DentistryImage from './images/dentistry.png';
import PrimaryCareImage from './images/primary-care.png';
import CardiologyImage from './images/cardiology.png';
import MRIImage from './images/mri.png';
import BloodTestImage from './images/blood-test.png';
import PsychologistImage from './images/psychologist.png';
import LaboratoryImage from './images/lab.png';
import XRayImage from './images/xray.png';

const Consulation = () => {
    const specializations = [
      { image: DentistryImage, title: 'Dentistry' },
      { image: PrimaryCareImage, title: 'Primary Care' },
      { image: CardiologyImage, title: 'Cardiology' },
      { image: MRIImage, title: 'MRI Resonance' },
      { image: BloodTestImage, title: 'Blood Test' },
      { image: PsychologistImage, title: 'Psychologist' },
      { image: LaboratoryImage, title: 'Laboratory' },
      { image: XRayImage, title: 'X-Ray' },
    ];
  
    return (
      <div className="homepage">
        {/* Header Section */}
        <header className="header d-flex justify-content-between align-items-center px-4 py-2">
        <div className="logo">Healio</div>
        <nav>
          <a href="/Calculator" className="mx-3 text-dark">
            Calculator
          </a>
          <a href="#symptom-checker" className="mx-3 text-dark">
            Symptom Checker
          </a>
          <a href="#consultation" className="mx-3 text-dark">
            Consultation
          </a>
        </nav>
        <div className='login'>
        <button className="btn btn-primary">Login/Signup</button>
        </div>
      </header>
  
        {/* Find By Specialization Section */}
        <section className="find-by-specialization py-5 bg-light">
          <div className="container text-center">
            <h2 className="find-specialisation-title mb-4">Find By Specialisation</h2>
            <div className="specializations-grid">
              {specializations.map((item, index) => (
                <button className="specialization-button" key={index}>
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                </button>
              ))}
            </div>
            <div className='view-all'>
            <button className="btn btn-primary mt-4">View All</button>
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
  
  export default Consulation;
  
