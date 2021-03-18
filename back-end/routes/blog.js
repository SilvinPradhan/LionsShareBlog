const express = require('express');
// Handle incoming routes
const router = express.Router();
const { requireSignin, adminMiddleware } = require('../controllers/auth');

const { create } = require('../controllers/blog');

router.post('/blog', requireSignin, adminMiddleware, create);

module.exports = router;
