const bcrypt = require('bcryptjs');
const User = require('../model/UserModel.cjs');

exports.register = async (req, res) => {
  try {
    const {fullname, address, email, password} = req.body;

    // Check if email is already in use
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return res.status(400).json({message: 'Email déjà utilisé !'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      fullname,
      address,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return res.status(201).json({message: 'User created successfully'});
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: 'Internal server problem'});
  }
};
