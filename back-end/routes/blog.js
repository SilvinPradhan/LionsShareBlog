const express = require('express');
const router = express.Router();
const { create, list, listBlogCategoriesAndTags, listOne, remove, update } = require('../controllers/blog');

const { requireSignin, adminMiddleware } = require('../controllers/auth');

router.post('/blog', requireSignin, adminMiddleware, create);
router.get('/blogs', list);

router.post('/blogs-categories-tags', listBlogCategoriesAndTags);
router.get('/blog/:slug', listOne);
router.delete('/blog/:slug', requireSignin, adminMiddleware, remove);
router.put('/blog/:slug', requireSignin, adminMiddleware, update);

module.exports = router;
