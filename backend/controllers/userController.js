const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username }); 
    if (existingUser) return res.status(409).json({ error: 'Username already exists' });

    const newUser = new User({ username, password });
    await newUser.save(); 

    res.status(201).json({ message: 'User registered (write successful)', userId: newUser._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username }); // Read
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'User authenticated (read successful)', userId: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
