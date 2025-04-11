/*import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerComponent from './customer/customerComponent';
import RecommendationComponent from './recommendation/recommendationComponent';
import RelevantProducts from './components/RelevantProducts/RelevantProducts';
const App = () => {
  return (
    <div class="header">
    <h1 style={{ textAlign: 'center' }}>SmartCart AI</h1>
        <CustomerComponent />
        <RelevantProducts />
        <RecommendationComponent />
    </div>
  );
};

export default App;
*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import CustomerComponent from './customer/customerComponent';
import RelevantProducts from './components/RelevantProducts/RelevantProducts';
import RecommendationComponent from './recommendation/recommendationComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer" element={<CustomerComponent />} />
        <Route path="/relevant" element={<RelevantProducts/>} />
        <Route path="/recommendations" element={<RecommendationComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
