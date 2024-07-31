// controllers/userController.js
const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

const UserController = {
  register: (req, res) => {
    const { username, email, firstName, lastName, password } = req.body;

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }

      const newUser = { username, email, firstName, lastName, password: hash };

      // Create user in the database
      UserModel.createUser(newUser, (err, userId) => {
        if (err) {
          return res.status(500).json({ error: 'User registration failed' });
        }

        res.status(201).json({ message: 'User registered successfully', userId });
      });
    });
  },

  login: (req, res) => {
    const { username, password } = req.body;

    // Retrieve user by username
    UserModel.getUserByUsername(username, (err, user) => {
      if (err || !user) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      // Compare hashed password
      bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }

        res.status(200).json({ message: 'Login successful', userId: user.id });
      });
    });
  },

  getAllUsers: (req, res) => {
    UserModel.getAllUsers((err, users) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to retrieve users' });
      }

      res.status(200).json(users);
    });
  },

  getUserById: (req, res) => {
    const { id } = req.params;

    UserModel.getUserById(id, (err, user) => {
      if (err || !user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json(user);
    });
  },

  updateUserById: (req, res) => {
    const { id } = req.params;
    const { email, firstName, lastName } = req.body;

    UserModel.updateUserById(id, { email, firstName, lastName }, (err, changes) => {
      if (err || changes === 0) {
        return res.status(404).json({ error: 'User update failed' });
      }

      res.status(200).json({ message: 'User updated successfully' });
    });
  },
};

module.exports = UserController;
