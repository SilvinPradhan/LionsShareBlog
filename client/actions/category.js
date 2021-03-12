import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const create = (category, token) => {
	return fetch(`${API}/category`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(category),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};
