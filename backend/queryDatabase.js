// backend/queryDatabase.js

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to the DB
const dbPath = path.resolve(__dirname, 'database', 'ecommerce.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error('DB Connection Error:', err.message);
  console.log('✅ Connected to SQLite DB');
});

// Example Query: Fetch all from customer_data
db.all('SELECT * FROM customer_data', [], (err, rows) => {
  if (err) throw err;

  rows.forEach((row) => {
    console.log(row);
  });
});

// Close connection
db.close((err) => {
  if (err) return console.error(err.message);
  console.log('🔒 Closed the database connection.');
});
