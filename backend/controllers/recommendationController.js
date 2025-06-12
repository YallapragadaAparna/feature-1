const db = require('../database/db');
const { getCustomerById } = require('../models/customerModel');
const askOllama = require('../database/askollama.js');

exports.getRecommendationsByCustomerId = (req, res) => {
  const customerId = req.params.id;

  getCustomerById(customerId, (err, customer) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching customer data' });
    }

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    let browsingHistoryRaw = customer.Browsing_History || '';
    let browsingHistory = [];

    try {
      browsingHistory = browsingHistoryRaw
        .replace(/[\[\]']+/g, '') // remove brackets and single quotes
        .split(',')
        .map(item => item.trim().toLowerCase())
        .filter(item => item.length > 0);
    } catch (e) {
      console.error('Error cleaning Browsing_History:', e);
    }

    console.log('Parsed Browsing History:', browsingHistory);

    if (browsingHistory.length === 0) {
      return res.status(200).json({ message: 'No browsing history found', data: [] });
    }

    const placeholders = browsingHistory.map(() => '?').join(', ');
    const sql = `
      SELECT Product_ID, Category, SubCategory, Brand, Price, Product_Rating
      FROM product_recommendation
      WHERE LOWER(Category) IN (${placeholders})
         OR LOWER(SubCategory) IN (${placeholders})
      ORDER BY Product_Rating DESC
      LIMIT 5
    `;

    db.all(sql, [...browsingHistory, ...browsingHistory], async (err, rows) => {
      if (err) {
        console.error('SQL Error:', err.message);
        return res.status(500).json({ error: 'Error fetching relevant products' });
      }

      if (rows.length === 0) {
        return res.status(200).json({ message: 'No matching products found', data: [] });
      }

      try {
        // Prepare the prompt for Ollama
        const userPrompt = `
        Customer Info:
        ID: ${customer.Customer_ID}
        Age: ${customer.Age}
        Gender: ${customer.Gender}
        Location: ${customer.Location}
        Browsing History: ${browsingHistory.join(', ')}

        Matching Products:
        ${JSON.stringify(rows, null, 2)}

        Please provide the top 3 product recommendations with short reasons.
        `;

        // Call the askOllama function
        const recommendationText = await askOllama(userPrompt);

        return res.status(200).json({
          message: 'AI-generated recommendations',
          recommendations: recommendationText,
          matchedProducts: rows,
        });

      } catch (err) {
        console.error('Ollama Error:', err);
        return res.status(500).json({ error: 'Error generating AI recommendations' });
      }
    });
  });
};
