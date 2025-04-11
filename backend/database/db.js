const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, 'ecommerce.db'), (err) => {
  if (err) console.error("DB Connection Error:", err.message);
  else console.log("Connected to SQLite DB ✅");
});

module.exports = db;
