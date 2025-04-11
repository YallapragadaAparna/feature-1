const db = require('../database/db');

function getCustomerById(id, callback) {
  const query = 'SELECT * FROM customer_data WHERE Customer_ID = ?';
  db.get(query, [id], (err, row) => {
    callback(err, row);
  });
}

module.exports = { getCustomerById };
