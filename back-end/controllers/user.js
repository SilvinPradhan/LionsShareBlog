const User = require('../models/user');

// Route for profile - give the user profile
exports.read = (req, res) => {
	req.profile.hashed_password = undefined;
	return res.json(req.profile);
};
