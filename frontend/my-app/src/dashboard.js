import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">SmartCart AI Dashboard</h1>

      <div className="dashboard-grid">
        <div onClick={() => navigate('/customer')} className="dashboard-card">
          <h2 className="card-title">Fetch Customer Details</h2>
          <p className="card-text">View detailed information about a customer using their ID.</p>
        </div>

        <div onClick={() => navigate('/relevant')} className="dashboard-card">
          <h2 className="card-title">Fetch Relevant Products</h2>
          <p className="card-text">Get product suggestions based on the customer's preferences.</p>
        </div>

        <div onClick={() => navigate('/recommendations')} className="dashboard-card">
          <h2 className="card-title">Smart Recommendations</h2>
          <p className="card-text">Generate personalized recommendations using AI.</p>
        </div>
      </div>

      {/*<div className="dashboard-buttons">
        <button onClick={() => navigate('/customer')} className="component-button">View Customer</button>
        <button onClick={() => navigate('/relevant')} className="component-button">Relevant Products</button>
      </div>*/}
    </div>
  );
};

export default Dashboard;
