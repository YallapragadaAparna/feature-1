/*import React, { useState } from 'react';
import './components.css';

const RecommendationComponent = () => {
  const [customerId, setCustomerId] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setCustomerId(e.target.value);
  };

  const fetchRecommendations = async () => {
    if (!customerId.trim()) {
      setMessage('Please enter a valid Customer ID');
      return;
    }

    setLoading(true);
    setMessage('');
    setRecommendations('');
    setProducts([]);

    try {
      const response = await fetch(`http://localhost:3001/api/recommendations/${customerId}`);
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Recommendations fetched successfully');
        setRecommendations(data.recommendations || '');
        setProducts(data.matchedProducts || []);
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setMessage('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="component-container">
      <h2>Smart Recommendations</h2>

      <input
        type="text"
        placeholder="Enter Customer ID"
        value={customerId}
        onChange={handleInputChange}
        className="component-input"
      />

      <button
        onClick={fetchRecommendations}
        className="component-button"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Get Recommendations'}
      </button>

      {message && <p className="error-message">{message}</p>}

      {recommendations && (
        <div className="component-container" style={{ marginTop: '20px' }}>
          <h3>AI Recommendations</h3>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{recommendations}</pre>
        </div>
      )}

      {products.length > 0 && (
        <div className="component-container" style={{ marginTop: '20px' }}>
          <h3>Matched Products</h3>
          {products.map((product) => (
            <div key={product.Product_ID} style={{ marginBottom: '15px' }}>
              <strong>Brand:</strong> {product.Brand}<br />
              <strong>ID:</strong> {product.Product_ID}<br />
              <strong>Category:</strong> {product.Category}<br />
              <strong>SubCategory:</strong> {product.SubCategory}<br />
              <strong>Price:</strong> ${product.Price}<br />
              <strong>Rating:</strong> {product.Product_Rating}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationComponent; it is good*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './components.css';
import { Star, Tag, ShoppingCart, ArrowLeft } from 'lucide-react';

const RecommendationComponent = () => {
  const [customerId, setCustomerId] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRecommendations = async () => {
    setLoading(true);
    setMessage('');
    setRecommendations('');
    setProducts([]);

    try {
      const response = await fetch(`http://localhost:3001/api/recommendations/${customerId}`);
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setRecommendations(data.recommendations || '');
        setProducts(data.matchedProducts || []);
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setMessage('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className= "component-container extended-container">
           <Link to="/" className="back-button">
              <ArrowLeft size={16} className="mr-1" />
              Back to Dashboard
            </Link>
            
     
      
      <h1 className="text-xl font-bold mb-4 text-center">🛍️ Smart Recommendations</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          className="component-input"
        />
        <button
          onClick={fetchRecommendations}
          className="component-button"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Recommendations'}
        </button>
      </div>

      {message && <p className="mb-4 font-semibold text-center">{message}</p>}

      {recommendations && (
        <div className="mb-6 p-4 bg-gray-50 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">✨ AI Recommendations</h2>
          <pre className="whitespace-pre-wrap text-sm">{recommendations}</pre>
        </div>
      )}

      {products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.Product_ID}
              className="border border-gray-300 rounded p-4 shadow-sm hover:shadow-lg transition duration-300 ease-in-out bg-white"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold flex items-center">
                  <ShoppingCart size={18} className="mr-2 text-blue-600" />
                  {product.Brand}
                </h3>
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-500 mr-1" />
                  <span>{product.Product_Rating}</span>
                </div>
              </div>
              <p className="text-sm flex items-center mb-1">
                <Tag size={16} className="mr-1 text-gray-500" />
                <strong>ID:</strong> {product.Product_ID}
              </p>
              <p className="text-sm flex items-center mb-1">
                <Tag size={16} className="mr-1 text-gray-500" />
                <strong>Category:</strong> {product.Category}
              </p>
              <p className="text-sm flex items-center mb-1">
                <Tag size={16} className="mr-1 text-gray-500" />
                <strong>SubCategory:</strong> {product.SubCategory}
              </p>
              <p className="text-sm flex items-center mb-1">
                <Tag size={16} className="mr-1 text-gray-500" />
                <strong>Price:</strong> ${product.Price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationComponent;
// src/recommendation/recommendationComponent.js

/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './components.css';
import { Star, Tag, ShoppingCart, ArrowLeft } from 'lucide-react';

const RecommendationComponent = () => {
  const [customerId, setCustomerId] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRecommendations = async () => {
    setLoading(true);
    setMessage('');
    setRecommendations('');
    setProducts([]);

    try {
      const response = await fetch(`http://localhost:3001/api/recommendations/${customerId}`);
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setRecommendations(data.recommendations || '');
        setProducts(data.matchedProducts || []);
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setMessage('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="component-container extended-container">
      <Link to="/" className="back-button">
        <ArrowLeft size={20} className="mr-1" />
        Back to Dashboard
      </Link>

      <h1 className="text-xl font-bold mb-4 text-center">🛍️ Smart Recommendations</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          className="component-input"
        />
        <button
          onClick={fetchRecommendations}
          className="component-button"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Recommendations'}
        </button>
      </div>

      {message && <p className="mb-4 font-semibold text-center">{message}</p>}

      {recommendations && (
        <div className="mb-6 p-4 bg-gray-50 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">✨ AI Recommendations</h2>
          <pre className="whitespace-pre-wrap text-sm">{recommendations}</pre>
        </div>
      )}

      {products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.Product_ID}
              className="product-card"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold flex items-center">
                  <ShoppingCart size={18} className="mr-2 text-blue-600" />
                  {product.Brand}
                </h3>
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-500 mr-1" />
                  <span>{product.Product_Rating}</span>
                </div>
              </div>
              <p className="text-sm flex items-center mb-1">
                <Tag size={16} className="mr-1 text-gray-500" />
                <strong>ID:</strong> {product.Product_ID}
              </p>
              <p className="text-sm flex items-center mb-1">
                <Tag size={16} className="mr-1 text-gray-500" />
                <strong>Category:</strong> {product.Category}
              </p>
              <p className="text-sm flex items-center mb-1">
                <Tag size={16} className="mr-1 text-gray-500" />
                <strong>SubCategory:</strong> {product.SubCategory}
              </p>
              <p className="text-sm flex items-center mb-1">
                <Tag size={16} className="mr-1 text-gray-500" />
                <strong>Price:</strong> ${product.Price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationComponent;*/



  