import fetch from 'isomorphic-fetch';
import { API } from '../config';
import cookie from 'js-cookie';

export const signup = (user) => {
	return fetch(`${API}/signup`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

export const signin = (user) => {
	return fetch(`${API}/signin`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

// Set Cookie
export const setCookie = (key, value) => {
	// check if the process is running in the client side
	if (process.browser) {
		cookie.set(key, value, {
			expires: 1,
		});
	}
};

export const removeCookie = (key) => {
	if (process.browser) {
		cookie.remove(key, {
			expires: 1,
		});
	}
};

// Get Cookie
export const getCookie = (key) => {
	if (process.browser) {
		cookie.get(key);
	}
};

// LocalStorage
export const setLocalStorage = (key, value) => {
	if (process.browser) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const removeLocalStorage = (key) => {
	if (process.browser) {
		localStorage.removeItem(key);
	}
};

/* Middleware Setup  */
// Authenticate user by pass data to cookie and localStorage
export const authenticate = (data, next) => {
	setCookie('token', data.token);
	setLocalStorage('user', data.user);
	next();
};

// Get the authenticated user data from localStorage
export const isAuthenticated = () => {
	if (process.browser) {
		const cookieChecked = getCookie('token');
		if (cookieChecked) {
			if (localStorage.getItem('user')) {
				return JSON.parse(localStorage.getItem('user'));
			} else {
				return false;
			}
		}
	}
};
