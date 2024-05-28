const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/UserModel.cjs');
require('dotenv').config(); // Load environment variables

// Signup controller
exports.signup = async (req, res) => {
  try {
    const {address, fullname, email, password} = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return res.status(400).json({message: 'Email already exists!'});
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      address,
      fullname,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    // Generate JWT token for the newly signed up user
    const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Return token in response along with success message
    res.status(201).json({message: 'User created successfully!', token});
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: 'Error while signing up!'});
  }
};

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.cjs'); // Ensure the path is correct

exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;

    // Find user by email
    const user = await User.findOne({email});
    if (!user) {
      return res.status(401).json({message: 'Email is invalid!'});
    }

    // Compare provided password with the stored hashed password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({message: 'Password is invalid!'});
    }

    // Create JWT payload
    const payload = {
      user: {
        userId: user._id,
      },
    };

    // Sign the JWT
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'});

    // Respond with the JWT token
    res.status(200).json({token});
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: 'Error while authenticating!'});
  }
};
