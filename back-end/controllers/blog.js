const Blog = require('../models/blog');
const Category = require('../models/category');
const Tag = require('../models/tag');
const formidable = require('formidable');
const slugify = require('slugify');
const stripHtml = require('string-strip-html');
const _ = require('lodash');
const { errorHandler } = require('../helpers/dbErrorHandler');
const fs = require('fs');
const { smartExcerpt } = require('../helpers/smartExcerpt');

exports.create = (req, res) => {
	let form = new formidable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req, (err, fields, files) => {
		if (err)
			return res.status(400).json({
				error: 'Image could not be uploaded',
			});

		const { title, body, categories, tags } = fields;

		if (!title || !title.length) {
			return res.status(400).json({
				error: 'Title is required.',
			});
		}
		if (!body || !body.length > 200) {
			return res.status(400).json({
				error: 'Content is less or equal to 200',
			});
		}
		if (!categories || !categories.length === 0) {
			return res.status(400).json({
				error: 'Please add one "category,." At least one category  is required.',
			});
		}
		if (!tags || !tags.length === 0) {
			return res.status(400).json({
				error: 'Please add one "tag." At least one tag is required.',
			});
		}

		let blog = new Blog();
		blog.title = title;
		blog.body = body;
		blog.excerpt = smartExcerpt(body, 320, ' ', ' ...');
		blog.slug = slugify(title);
		blog.mtitle = `${title} | ${process.env.APP_NAME}`;
		blog.mdesc = stripHtml(body.substring(0, 160)).result;
		blog.postedBy = req.user._id;

		let arrayOfCategories = categories && categories.split(',');
		let arrayOfTags = tags && tags.split(',');

		if (files.photo) {
			if (files.photo.size > 10000000) {
				return res.status(400).json({
					error: 'Image should be less then 1mb in size',
				});
			}
			blog.photo.data = fs.readFileSync(files.photo.path);
			blog.photo.contentType = files.photo.type;
		}

		blog.save((err, result) => {
			if (err) {
				return res.status(400).json({
					error: errorHandler(err),
				});
			}
			// res.json(result);
			Blog.findByIdAndUpdate(result._id, { $push: { categories: arrayOfCategories } }, { new: true }).exec(
				(err, result) => {
					if (err)
						return res.status(400).json({
							error: errorHandler(err),
						});
					else
						Blog.findByIdAndUpdate(result._id, { $push: { tags: arrayOfTags } }, { new: true }).exec(
							(err, result) => {
								if (err)
									return res.status(400).json({
										error: errorHandler(err),
									});
								else res.json(result);
							}
						);
				}
			);
		});
	});
};
// const { create, list, listBlogCategoriesAndTags, read, removeBlog, update } = require('../controllers/blog');

exports.list = (req, res) => {
	Blog.find({})
		.populate('categories', '_id name slug')
		.populate('tags', '_id name slug')
		.populate('postedBy', '_id name username')
		.select('_id title slug excerpt categories tags postedBy createdAt updatedAt')
		.exec((err, data) => {
			if (err) {
				return res.json({
					error: errorHandler(err),
				});
			}
			res.json(data);
		});
};

exports.listBlogCategoriesAndTags = (req, res) => {
	let limit = req.body.limit ? parseInt(req.body.limit) : 10;
	let skip = req.body.skip ? parseInt(req.body.skip) : 0;

	let categories;
	let tags;
	let blogs;
	Blog.find({})
		.populate('categories', '_id name slug')
		.populate('tags', '_id name slug')
		.populate('postedBy', '_id name username profile')
		.sort({ createdAt: -1 })
		.skip(skip)
		.limit(limit)
		.select('_id title slug excerpt categories tags postedBy createdAt updatedAt')
		.exec((err, data) => {
			if (err) {
				return res.json({
					error: errorHandler(err),
				});
			}
			blogs = data;
			// Get all categories
			Category.find({}).exec((err, item) => {
				if (err) {
					return res.json({
						error: errorHandler(err),
					});
				}
				categories = item;
				// Get all tags now
				Tag.find({}).exec((err, item) => {
					if (err) {
						return res.json({
							error: errorHandler(err),
						});
					}
					tags = item;
					// return all of them
					res.json({ blogs, categories, tags, size: blogs.length });
				});
			});
		});
};

exports.read = (req, res) => {};
exports.removeBlog = (req, res) => {};
exports.update = (req, res) => {};
