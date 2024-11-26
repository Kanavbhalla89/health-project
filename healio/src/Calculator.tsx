import './Consulation.css';
import { Link } from 'react-router-dom';

const Consulation = () => {
    const specializations = [
        { title: 'BMI Calculator', path: '/bmi' },
        { title: 'Calorie Intake', path: '/calorie' },
        { title: 'Period Due Date', path: '/perioddate' },
        { title: 'Protein Intake', path: '/protein' },
        { title: 'TDEE Caculator', path: '/tdee' },
        { title: ' . Weight Loss . ', path: '/weightloss' },
        { title: '.   Weight Gain   .', path: '/weight-gain' },
        { title: '.  Water Intake .', path: '/water-intake' },
    ];

    return (
        <div className="homepage">
            {/* Header Section */}
            <header className="header">
                <div className="logo">
                    <a href="/HomePage"><b>Healio</b></a>
                </div>
                <nav>
                    <a href="#calculator">Calculator</a>
                    <a href="#symptom-checker">Symptom Checker</a>
                    <Link to="/Consultation">Consultation</Link>
                </nav>
                <div className="login">
                    <button>Login/Signup</button>
                </div>
            </header>

            {/* Find By Specialization Section */}
            <section className="find-by-specialization py-5 bg-light">
                <div className="container text-center">
                    <h2 className="find-specialisation-title mb-4">Choose a Calculator</h2>
                    <div className="specializations-grid">
                        {specializations.map((item, index) => (
                            <Link to={item.path} key={index} className="specialization-link">
                                <button className="specialization-button">
                                    <p>{item.title}</p>
                                </button>
                            </Link>
                        ))}
                    </div>
                    <div className="view-all">
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
