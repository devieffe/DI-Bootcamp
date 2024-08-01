const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'users.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Database connected successfully.');


    db.run(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        email TEXT UNIQUE,
        first_name TEXT,
        last_name TEXT
      )`,
      (err) => {
        if (err) {
          console.error('Error creating users table:', err);
        }
      }
    );


    db.run(
      `CREATE TABLE IF NOT EXISTS hashpwd (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
      )`,
      (err) => {
        if (err) {
          console.error('Error creating hashpwd table:', err);
        }
      }
    );
  }
});

module.exports = db;
