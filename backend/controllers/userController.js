const User = require('../models/User');
const Post = require('../models/Post');  

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username }); 
    if (existingUser) return res.status(409).json({ error: 'Username already exists' });

    const newUser = new User({ username, password });
    await newUser.save();

    
    const welcomePost = new Post({
      title: 'Welcome!',
      content: 'Thanks for signing up!',
      user: newUser._id
    });
    await welcomePost.save();

  
    newUser.posts = [welcomePost._id];
    await newUser.save();

    res.status(201).json({ message: 'User registered with initial post', userId: newUser._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const userWithPosts = await User.findById(user._id).populate('posts');

    res.status(200).json({
      message: 'User authenticated (read successful)',
      userId: user._id,
      posts: userWithPosts.posts
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
