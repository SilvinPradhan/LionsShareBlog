const express = require('express');
// Handle incoming routes
const router = express.Router();
const { create } = require('../controllers/category');

// validators
const { runValidation } = require('../validator/index');
const { categoryCreateValidator } = require('../validator/category');
const { requireSignin, adminMiddleware } = require('../controllers/auth');

router.post('/category', categoryCreateValidator, runValidation, requireSignin, adminMiddleware, create);

module.exports = router;
