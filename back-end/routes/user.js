const express = require('express');
// Handle incoming routes
const router = express.Router();

const { requireSignin, authMiddleware } = require('../controllers/auth');
const { read } = require('../controllers/user');

router.get('/profile', requireSignin, authMiddleware, read);

module.exports = router;
