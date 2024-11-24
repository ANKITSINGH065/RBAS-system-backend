// routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Example of a protected route
router.get('/admin', protect(['Admin']), (req, res) => {
    res.send('Admin content');
});

module.exports = router;