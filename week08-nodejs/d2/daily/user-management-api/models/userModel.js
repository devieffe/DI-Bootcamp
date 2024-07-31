// models/userModel.js
const db = require('../config/database');

const UserModel = {
  createUser: (user, callback) => {
    const { username, email, firstName, lastName, password } = user;
    db.serialize(() => {
      // Start a transaction
      db.run('BEGIN TRANSACTION');

      // Insert user data
      db.run(
        `INSERT INTO users (username, email, first_name, last_name) VALUES (?, ?, ?, ?)`,
        [username, email, firstName, lastName],
        function (err) {
          if (err) {
            db.run('ROLLBACK');
            callback(err);
          } else {
            // Insert password data
            db.run(
              `INSERT INTO hashpwd (username, password) VALUES (?, ?)`,
              [username, password],
              function (err) {
                if (err) {
                  db.run('ROLLBACK');
                  callback(err);
                } else {
                  db.run('COMMIT');
                  callback(null, this.lastID);
                }
              }
            );
          }
        }
      );
    });
  },

  getUserByUsername: (username, callback) => {
    db.get(
      `SELECT u.*, h.password FROM users u INNER JOIN hashpwd h ON u.username = h.username WHERE u.username = ?`,
      [username],
      (err, row) => {
        callback(err, row);
      }
    );
  },

  getAllUsers: (callback) => {
    db.all(`SELECT * FROM users`, [], (err, rows) => {
      callback(err, rows);
    });
  },

  getUserById: (id, callback) => {
    db.get(`SELECT * FROM users WHERE id = ?`, [id], (err, row) => {
      callback(err, row);
    });
  },

  updateUserById: (id, user, callback) => {
    const { email, firstName, lastName } = user;
    db.run(
      `UPDATE users SET email = ?, first_name = ?, last_name = ? WHERE id = ?`,
      [email, firstName, lastName, id],
      function (err) {
        callback(err, this.changes);
      }
    );
  },
};

module.exports = UserModel;
