/*import React, { useState } from 'react';
import './components.css';

const CustomerComponent = () => {
  const [customerId, setCustomerId] = useState('');
  const [customerData, setCustomerData] = useState(null);
  const [error, setError] = useState(null);

  const fetchCustomer = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/customers/${customerId}`);
      if (!response.ok) throw new Error('Customer not found');
      const data = await response.json();
      setCustomerData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setCustomerData(null);
    }
  };
   
  return (
  
    <div className="component-container">
      
      <h2 className="component-title">Fetch Customer Details</h2>
      <input
        type="text"
        placeholder="Enter Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        className="component-input"
      />
      <button onClick={fetchCustomer} className="component-button">
        Fetch
      </button>

      {error && <p className="error-message">{error}</p>}

      {customerData && (
        <div className="recommendation-results">
          <p><strong>ID:</strong> {customerData.Customer_ID}</p>
          <p><strong>Age:</strong> {customerData.Age}</p>
          <p><strong>Gender:</strong> {customerData.Gender}</p>
          <p><strong>Location:</strong> {customerData.Location}</p>
          <p><strong>Browsing History:</strong> {customerData.Browsing_History}</p>
          <p><strong>Purchase History:</strong> {customerData.Purchase_history}</p>
          <p><strong>Customer Segment:</strong> {customerData.Customer_Segment}</p>
          <p><strong>Average Order Value:</strong> {customerData.Avg_Order_Value}</p>
          <p><strong>Holiday:</strong> {customerData.Holiday}</p>
          <p><strong>Season:</strong> {customerData.Season}</p>
        </div>
      )}
    </div>
  );
};

export default CustomerComponent;*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './components.css';
import {
  User,
  MapPin,
  Eye,
  ShoppingBag,
  Group,
  DollarSign,
  Gift,
  Sun,
  Fingerprint,
  ArrowLeft
} from 'lucide-react';

const CustomerComponent = () => {
  const [customerId, setCustomerId] = useState('');
  const [customerData, setCustomerData] = useState(null);
  const [error, setError] = useState(null);

  const fetchCustomer = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/customers/${customerId}`);
      if (!response.ok) throw new Error('Customer not found');
      const data = await response.json();
      setCustomerData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setCustomerData(null);
    }
  };

  return (
    <div className= "component-container extended-container">
           <Link to="/" className="back-button">
        <ArrowLeft size={16} className="mr-1" />
        Back to Dashboard
      </Link>

      <h2 className="component-title">Fetch Customer Details</h2>
      <input
        type="text"
        placeholder="Enter Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        className="component-input"
      />
      <button onClick={fetchCustomer} className="component-button">
        Fetch
      </button>

      {error && <p className="error-message">{error}</p>}

      {customerData && (
        <div className="recommendation-results">
          <h3 style={{ marginBottom: '10px' }}>Customer Information</h3>

          <div className="product-card">
            <div className="icon-label">
              <Fingerprint size={18} /> <strong>ID:</strong> {customerData.Customer_ID}
            </div>
            <div className="icon-label">
              <User size={18} /> <strong>Age:</strong> {customerData.Age}
            </div>
            <div className="icon-label">
              <User size={18} /> <strong>Gender:</strong> {customerData.Gender}
            </div>
            <div className="icon-label">
              <MapPin size={18} /> <strong>Location:</strong> {customerData.Location}
            </div>
            <div className="icon-label">
              <Eye size={18} /> <strong>Browsing History:</strong> {customerData.Browsing_History}
            </div>
            <div className="icon-label">
              <ShoppingBag size={18} /> <strong>Purchase History:</strong> {customerData.Purchase_history}
            </div>
            <div className="icon-label">
              <Group size={18} /> <strong>Customer Segment:</strong> {customerData.Customer_Segment}
            </div>
            <div className="icon-label">
              <DollarSign size={18} /> <strong>Avg Order Value:</strong> ${customerData.Avg_Order_Value}
            </div>
            <div className="icon-label">
              <Gift size={18} /> <strong>Holiday:</strong> {customerData.Holiday}
            </div>
            <div className="icon-label">
              <Sun size={18} /> <strong>Season:</strong> {customerData.Season}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerComponent;
