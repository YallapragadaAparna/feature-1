const db = require('../database/db');
const { getCustomerById } = require('../models/customerModel');

// Controller to get relevant products based on customer's Browsing_History
exports.getRelevantProductsByCustomerId = (req, res) => {
  const customerId = req.params.id;

  getCustomerById(customerId, (err, customer) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching customer data' });
    }

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    // Step 1: Parse the Browsing_History manually
    let browsingHistoryRaw = customer.Browsing_History || '';
    let browsingHistory = [];

    try {
      // Remove brackets, single quotes, then split
      browsingHistory = browsingHistoryRaw
        .replace(/[\[\]']+/g, '') // remove [ ] and '
        .split(',')
        .map(item => item.trim().toLowerCase())
        .filter(item => item.length > 0); // remove empty entries
    } catch (e) {
      console.error('Error cleaning Browsing_History:', e);
    }

    console.log('Parsed Browsing History:', browsingHistory);

    if (browsingHistory.length === 0) {
      return res.status(200).json({ message: 'No browsing history found', data: [] });
    }

    // Step 2: Query products by matching Category
    const placeholders = browsingHistory.map(() => '?').join(', ');
    const sql = `
      SELECT Product_ID, Category, SubCategory, Brand, Price, Product_Rating
      FROM product_recommendation
      WHERE LOWER(Category) IN (${placeholders})
    `;

    db.all(sql, browsingHistory, (err, rows) => {
      if (err) {
        console.error('SQL Error:', err.message);
        return res.status(500).json({ error: 'Error fetching relevant products' });
      }

      if (rows.length === 0) {
        return res.status(200).json({ message: 'No matching products found', data: [] });
      }

      return res.status(200).json({ message: 'Matching products found', data: rows });
    });
  });
};
