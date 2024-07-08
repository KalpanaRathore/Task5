const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../models/User');

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if user has already requested reset today
    const now = new Date();
    if (user.resetPasswordExpires && user.resetPasswordExpires > now) {
      return res.status(429).json({ error: 'Reset request limit exceeded' });
    }

    // Generate token for reset link
    const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: config.tokenExpiry });

    // Update user with token and expiry
    user.resetPasswordToken = token;
    user.resetPasswordExpires = new Date(now.getTime() + config.resetLimitTime);
    await user.save();

    res.json({ message: 'Password reset link sent successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
