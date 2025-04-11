import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './components.css';
import { Tag, Star, ShoppingCart,ArrowLeft } from 'lucide-react';

const RelevantProducts = () => {
  const [customerId, setCustomerId] = useState('');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchRelevantProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/products/relevant/${customerId}`);
      if (!response.ok) throw new Error('Failed to fetch relevant products');
      const data = await response.json();
      setProducts(data.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setProducts([]);
    }
  };

  return (
    <div className= "component-container extended-container">
           <Link to="/" className="back-button">
        <ArrowLeft size={16} className="mr-1" />
        Back to Dashboard
      </Link>
      <h2 className="component-title">Fetch Relevant Products</h2>
      <input
        type="text"
        placeholder="Enter Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        className="component-input"
      />
      <button onClick={fetchRelevantProducts} className="component-button">
        Fetch Products
      </button>

      {error && <p className="error-message">{error}</p>}

      {products.length > 0 && (
        <div className="recommendation-results">
          <h3>Relevant Products:</h3>
          {products.map((product) => (
            <div key={product.Product_ID} className="product-card">
              <div className="icon-label">
                <ShoppingCart size={18} /> <strong>{product.Brand}</strong>
              </div>
              <div className="icon-label">
                <Tag size={16} /> Category: {product.Category} / {product.SubCategory}
              </div>
              <div className="icon-label">
                <Star size={16} color="#facc15" /> Rating: {product.Product_Rating}
              </div>
              <div className="icon-label">
                💰 Price: ${product.Price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelevantProducts; 
