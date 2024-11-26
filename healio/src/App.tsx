import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Consultation from './Consultation';
import Calculator from './Calculator';  
import BMI from './bmi';
import Calorie from './calorie';
import PeriodDate from './perioddate';
import Protein from './protein';
import Tdee from './tdee';
import WeightLoss from './weightloss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Consultation" element={<Consultation />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/bmi" element={<BMI />} /> 
          <Route path="/calorie" element={<Calorie />} /> 
          <Route path="/perioddate" element={<PeriodDate />} />
          <Route path="/protein" element={<Protein />} /> 
          <Route path="/tdee" element={<Tdee />} /> 
          <Route path="/weightloss" element={<WeightLoss />} />   
        </Routes>
      </div>
    </Router>
  );
};

export default App;




// import React from 'react';
// import Calculator from './Calculator'; // Import the Calculator component

// const App: React.FC = () => {
//   return (
//     <div>
//       <Calculator /> {/* Directly display the Calculator component */}
//     </div>
//   );
// };

// export default App;

