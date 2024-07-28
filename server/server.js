const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors'); // Import cors
const app = express();

const db = new Sequelize('reactdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

app.use(cors()); // Use cors middleware
app.use(express.json());

// Define a model
const User = db.define('users', {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    unique: true, // Make email field unique
  }
});

// Sync database
db.sync();

// Define routes
app.get('/users/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Route for creating a post
app.post('/submit/', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Insert user data into the 'users' table
    await User.create({ name, email });
    res.status(200).send('User created successfully');
  } catch (err) {
    res.status(500).send('Error creating user');

  }
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
