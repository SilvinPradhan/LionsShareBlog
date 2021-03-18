const mongoose = require('mongoose');
const { ObjectId } = require('mongoose.Schema');
const blogSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
			min: 3,
			max: 160,
			required: true,
			index: true,
		},
		slug: {
			type: String,
			unique: true,
			index: true,
		},
		body: {
			type: {},
			required: true,
			min: 200,
			max: 200000,
		},
		excerpt: {
			type: String,
			required: true,
			max: 1000,
		},
		metaTitle: {
			type: String,
		},
		metaDescription: {
			type: String,
		},
		photo: {
			data: Buffer,
			contentType: String,
		},
		categories: [{ type: ObjectId, ref: 'Category', required: true }],
		tags: [{ type: ObjectId, ref: 'Tag', required: true }],
		postedBy: {
			type: ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model('User', blogSchema);
