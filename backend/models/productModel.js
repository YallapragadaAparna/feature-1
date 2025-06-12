const db = require('../database/db');

exports.getAllProducts = (callback) => {
  db.all('SELECT * FROM product_recommendation', [], callback);
};

