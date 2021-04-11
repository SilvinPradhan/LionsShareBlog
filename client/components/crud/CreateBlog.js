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
import { Jumbotron, Button } from 'reactstrap';

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
	// For categories
	const [checkedC, setCheckedC] = useState([]);
	// For tags
	const [checkedT, setCheckedT] = useState([]);

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
	const token = getCookie('token');
	useEffect(() => {
		setValues({ ...values, formData: new FormData() });
		initialCategories();
		initialTags();
	}, [router]);

	function initialCategories() {
		getCategories().then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setCategories(data);
			}
		});
	}

	function initialTags() {
		getTags().then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setTags(data);
			}
		});
	}

	const publishBlog = (e) => {
		e.preventDefault();
		createBlog(formData, token).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setValues({ ...values, title: '', success: `"${data.title} has been created."`, error: '' });
				setBody('');
				setCategories([]);
				setTags([]);
			}
		});
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

	const handleToggle = (item) => () => {
		setValues({ ...values, error: '' });
		// return the first index or -1
		const clickedCategory = checkedC.indexOf(item);
		const all = [...checkedC];
		if (clickedCategory === -1) {
			all.push(item);
		} else {
			all.splice(clickedCategory, 1);
		}
		console.log(all);
		setCheckedC(all);
		formData.set('categories', all);
	};

	const handleToggleTag = (item) => () => {
		setValues({ ...values, error: '' });
		// return the first index or -1
		const clickedTag = checkedT.indexOf(item);
		const all = [...checkedT];
		if (clickedTag === -1) {
			all.push(item);
		} else {
			all.splice(clickedTag, 1);
		}
		console.log(all);
		setCheckedT(all);
		formData.set('tags', all);
	};

	const displayCategories = () => {
		return (
			categories &&
			categories.map((item, index) => (
				<li key={index} className="list-unstyled">
					<input onChange={handleToggle(item._id)} type="checkbox" className="mr-2" />
					<label className="form-check-label">{item.name}</label>
				</li>
			))
		);
	};

	const displayTags = () => {
		return (
			tags &&
			tags.map((item, index) => (
				<li key={index} className="list-unstyled">
					<input onChange={handleToggleTag(item._id)} type="checkbox" className="mr-2" />
					<label className="form-check-label">{item.name}</label>
				</li>
			))
		);
	};

	const displayError = () => {
		<div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
			{error}
			{console.log(error)}
		</div>;
	};

	const displaySuccess = () => {
		<div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
			{success}
		</div>;
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
			<div className="container-fluid pb-5">
				<div className="row">
					<div className="col-md-8">
						{createBlogForm()}
						<div className="pt-3">
							{displayError()}
							{displaySuccess()}
						</div>
					</div>
					<div className="col-md-4">
						<div>
							<div className="form-group pb-2">
								<h5>Select Featured Image</h5>
								<hr />

								<small className="text-muted">Max Size: 1 MB</small>
								<label className="btn btn-info">
									Upload Featured Image
									<input onChange={handleChange('photo')} type="file" accept="image/*" hidden></input>
								</label>
							</div>
						</div>
						<Jumbotron>
							<div>
								<h5 style={{ fontWeight: 'bold' }}>Categories</h5>
								<hr />
								<ul
									style={{
										maxHeight: '100px',
										overflow: 'scroll',
										overflowY: 'hidden',
										overflowX: 'hidden',
									}}
								>
									{displayCategories()}
								</ul>
							</div>
							<div>
								<h5 style={{ fontWeight: 'bold' }}>Tags</h5>
								<hr />
								<ul
									style={{
										maxHeight: '100px',
										overflow: 'scroll',
										overflowY: 'hidden',
										overflowX: 'hidden',
									}}
								>
									{displayTags()}
								</ul>
							</div>
						</Jumbotron>
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
