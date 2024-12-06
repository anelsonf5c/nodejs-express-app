const User = require('../models/User');

// Register
exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create({ username, password });
    res.status(201).send({ message: 'User registered successfully!', user });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user || user.password !== password) {
      return res.status(401).send({ error: 'Invalid credentials' });
    }
    res.status(200).send({ message: 'Login successful!' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
