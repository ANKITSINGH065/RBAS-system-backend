// controllers/authController.js
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwtUtils');

exports.register = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const newUser = await User.create({ username, password, role });
        const token = generateToken(newUser._id, newUser.role);
        res.status(201).json({ token});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = generateToken(user._id, user.role);
        res.status(200).json({ token, role: user.role  });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};