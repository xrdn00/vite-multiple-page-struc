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
const User = db.define('user', {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  }
});

// Sync database
db.sync();

// Define routes
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
