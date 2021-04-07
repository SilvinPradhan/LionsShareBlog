import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuthenticated } from '../../actions/auth';
import { getCategories } from '../../actions/category';
import { getTags } from '../../actions/tag';
import { createBlog } from '../../actions/blog';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../node_modules/react-quill/dist/quill.snow.css';

const CreateBlog = ({ router }) => {
	const fetchFromLocalStorage = () => {
		if (typeof window === 'undefined') {
			return false;
		}
		if (localStorage.getItem('blog')) {
			return JSON.parse(localStorage.getItem('blog'));
		} else {
			return false;
		}
	};

	const [categories, setCategories] = useState([]);
	const [tags, setTags] = useState([]);

	const [body, setBody] = useState(fetchFromLocalStorage());
	const [values, setValues] = useState({
		error: '',
		sizeError: '',
		success: '',
		formData: '',
		title: '',
		hidePublishButton: false,
	});
	const { error, sizeError, success, formData, title, hidePublishButton } = values;
	useEffect(() => {
		setValues({ ...values, formData: new FormData() });
		initialCategories();
		initialTags();
	}, [router]);

	const initialCategories = () => {
		getCategories().then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setCategories(data);
			}
		});
	};

	const initialTags = () => {
		getTags().then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setTags(data);
			}
		});
	};

	const publishBlog = (e) => {
		e.preventDefault();
		console.log('published');
	};
	const handleChange = (name) => (e) => {
		const value = name === 'photo' ? e.target.files[0] : e.target.value;
		formData.set(name, value);
		setValues({ ...values, [name]: value, formData, error: '' });
	};
	const handleBody = (e) => {
		// console.log(e);
		setBody(e);
		formData.set('body', e);
		if (typeof window !== 'undefined') {
			localStorage.setItem('blog', JSON.stringify(e));
		}
	};
	const createBlogForm = () => {
		return (
			<form onSubmit={publishBlog}>
				<div className="form-group">
					<label className="text-muted"> Title </label>
					<input type="text" className="form-control" value={title} onChange={handleChange('title')} />
				</div>
				<div className="form-group">
					<ReactQuill
						modules={CreateBlog.modules}
						formats={CreateBlog.formats}
						value={body}
						placeholder="Write something cool and amazing for the world to know."
						onChange={handleBody}
					/>
				</div>
				<div>
					<button className="btn btn-primary" type="submit">
						Publish
					</button>
				</div>
			</form>
		);
	};
	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8">{createBlogForm()}</div>
					<div className="col-md-4">
						<h6>Categories</h6>
						<hr />
						<h6>Tags</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

CreateBlog.modules = {
	toolbar: [
		[{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
		[{ size: [] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		['link', 'image', 'video'],
		['clean'],
		['code-block'],
	],
};

CreateBlog.formats = [
	'header',
	'font',
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'link',
	'image',
	'video',
	'code-block',
];

export default withRouter(CreateBlog);
