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
