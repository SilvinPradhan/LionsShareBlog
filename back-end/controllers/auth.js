const User = require('../models/user');
const shortId = require('shortid');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

// Route for profile - give the user profile
exports.read = (req, res) => {
	req.profile.hashed_password = undefined;
	return res.json(req.profile);
};

// Sign Up Methods
exports.signup = (req, res) => {
	// const { name, email, password } = req.body;
	// res.json({
	//   user: { name, email, password },
	// });
	User.findOne({ email: req.body.email }).exec((err, user) => {
		if (user) {
			return res.status(400).json({
				error: 'Email is taken',
			});
		}
		// Create new user
		const { name, email, password } = req.body;
		let username = shortId.generate();
		let profile = `${process.env.CLIENT_URL}/profile/${username}`;

		let newUser = new User({ name, email, password, profile, username });
		newUser.save((err, success) => {
			if (err) {
				return res.status(400).json({
					error: err,
				});
			}
			// res.json({
			//   user: success,
			// });
			res.json({
				message: 'Signup successful! Please Sign in.',
			});
		});
	});
};

// Sign In Method
exports.signin = (req, res) => {
	const { email, password } = req.body;
	// check if the user exists
	User.findOne({ email }).exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: 'User with that email does not exist in the system. Please sign up!',
			});
		}
		// Authentication
		// Provide the plaintext password from the client side to the authenticate method for comparison.
		if (!user.authenticate(password)) {
			// if authentication failed..
			if (err || !user) {
				return res.status(400).json({
					error: 'Email and password do not match.',
				});
			}
			// Generate a token and send to the client interface, includes userID and secret
			// Signed Token
			const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
				expiresIn: '1d',
			});
			// Save the token in the cookie
			res.cookie('token', token, { expiresIn: '1d' });
			const { _id, username, name, email, role } = user;
			// It will display hash_password if not hidden. So,lets just send user: { _id, username, name, email, role },
			return res.json({
				token,
				user: { _id, username, name, email, role },
			});
		}
	});
};

// Sign Out Method
exports.signout = (req, res) => {
	res.clearCookie('token');
	res.json({
		message: 'Signout Successful.',
	});
};

// Require Sign in Method Middleware to apply in our Routes, any routes that we want to protext for the Logged In Users, apply this as a middleware.
// It will check the incoming tokens secret and it will compare with the secret that we have in the ENV file (it automatically checks for token expiry). If token matches then it will return true.
exports.requireSignin = expressJwt({
	secret: process.env.JWT_SECRET_KEY,
	algorithms: ['HS256'],
});

exports.authMiddleware = (req, res, next) => {
	const authUserId = req.user._id;
	User.findById({ _id: authUserId }).exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: 'User not found',
			});
		}
		req.profile = user;
		next();
	});
};

exports.adminMiddleware = (req, res, next) => {
	const adminUserId = req.user._id;
	User.findById({ _id: adminUserId }).exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: 'User not found',
			});
		}

		if (user.role !== 1) {
			return res.status(400).json({
				error: 'Admin resource. Access denied',
			});
		}

		req.profile = user;
		next();
	});
};
