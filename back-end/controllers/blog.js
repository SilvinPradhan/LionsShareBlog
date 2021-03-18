const Blog = require('../models/blog');
const Category = require('../models/category');
const Tag = require('../models/tag');
// handle form data => formidable package
const formidable = require('formidable');
const slugify = require('slugify');
const stripHtml = require('string-strip-html');
const _ = require('lodash');
const fs = require('fs');

const { errorHandler } = require('../helpers/dbErrorHandler');

exports.create = (req, res) => {
	let form = new formidable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req, (err, fields, files) => {
		if (err) {
			return res.status(400).json({ error: 'Image could not be uploaded' });
		}
		const { title, body, categories, tags } = fields;
		let blog = new Blog();
		blog.title = title;
		blog.body = body;
		blog.slug = slugify(title).toLowerCase();
		blog.metaTitle = `${title} | ${process.env.APP_NAME}`;
		blog.metaDescription = stripHtml(body.substring(0, 160));
		blog.postedBy = req.user._id;

		if (files.photo) {
			if (files.photo.size > 1000000) {
				return res.status(400).json({
					error: 'Image should be less than 1MB in size',
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
			res.json(result);
		});
	});
};
