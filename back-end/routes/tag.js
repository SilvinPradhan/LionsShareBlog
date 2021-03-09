const express = require('express');
// Handle incoming routes
const router = express.Router();
const { create, list, read, remove } = require('../controllers/tag');

// validators
const { runValidation } = require('../validator/index');
const { createTagValidator } = require('../validator/tag');
const { requireSignin, adminMiddleware } = require('../controllers/auth');

router.post('/tag', createTagValidator, runValidation, requireSignin, adminMiddleware, create);
router.get('/tags', list);
router.get('/tag/:slug', read);
router.delete('/tag/:slug', requireSignin, adminMiddleware, remove);

module.exports = router;
