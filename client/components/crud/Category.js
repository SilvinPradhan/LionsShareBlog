import { useState, useEffect } from 'react';
import { getCookie } from '../../actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import { create, getCategories, removeCategory } from '../../actions/category';
import { CardActions, FormControl, Input, InputLabel, InputAdornment, Button, Tooltip } from '@material-ui/core';
import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import ClassIcon from '@material-ui/icons/Class';
import { ListGroup, ListGroupItem } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing.unit,
	},
	button: {
		minWidth: 20,
		width: 'auto',
		height: '37px',
		letterSpacing: '0.5px',
		lineHeight: '35px',
		padding: '0 25px 0 25px',
		fontSize: '13.5px',
		backgroundColor: '#334aa6',
		color: 'white',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		borderRadius: '5px',
		border: 'none',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: '#525ed9',
		},
	},
	buttonList: {
		border: '0.5px solid #e8e8e8',
		textTransform: 'capitalize',
		justifyContent: 'space-between',
		display: 'inline-block',
	},
}));

const Category = (props) => {
	const classes = useStyles();
	const [values, setValues] = useState({
		name: '',
		error: false,
		success: false,
		categories: [],
		removed: false,
		reload: false,
	});

	const { name, error, success, categories, removed, reload } = values;
	const token = getCookie('token');

	useEffect(() => {
		loadCategories();
	}, [reload]);

	const loadCategories = () => {
		getCategories().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setValues({ ...values, categories: data });
				console.log(categories);
			}
		});
	};

	const showCategories = () => {
		return categories.map((item, index) => {
			return (
				<Tooltip interactive title="Double Click to Delete" arrow>
					<button
						onDoubleClick={() => confirmDelete(item.slug)}
						key={index}
						className="btn btn-outline-primary mr-1 ml-1 mt-3"
					>
						{item.name}
					</button>
				</Tooltip>
			);
		});
	};

	const confirmDelete = (slug) => {
		let answer = window.confirm(`Do you want to delete "${slug}" category? `);
		if (answer) {
			deleteCategory(slug);
		}
	};

	const deleteCategory = (slug) => {
		removeCategory(slug, token).then((data) => {
			if (data.error) console.log(data.error);
			else setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
		});
		console.log('deletes', slug);
	};

	const clickSubmit = (e) => {
		e.preventDefault();
		create({ name }, token).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error, success: false });
			} else {
				setValues({ ...values, error: false, success: true, name: '', removed: false, reload: !reload });
			}
		});
	};

	const handleChange = (e) => {
		setValues({ ...values, name: e.target.value, error: false, success: false, removed: '' });
	};

	const successMessage = () => {
		if (success) {
			return <p className="text-success">Category successfully created!</p>;
		}
	};

	const errorMessage = () => {
		if (error) {
			return <p className="text-info">Category already created!</p>;
		}
	};

	const deletedMessage = () => {
		if (removed) {
			return <p className="text-danger">Category successfully deleted!</p>;
		}
	};

	const mouseMoveHandler = (e) => {
		setValues({ ...values, error: false, success: false, removed: '' });
	};

	const newCategoryForm = () => (
		<>
			<form onSubmit={clickSubmit}>
				<FormControl className={classes.margin}>
					<InputLabel htmlFor="input-with-category-icon">Category Name:</InputLabel>
					<Input
						id="input-with-category-icon"
						type="text"
						onChange={handleChange}
						value={name}
						required
						startAdornment={
							<InputAdornment position="start">
								<ClassIcon />
							</InputAdornment>
						}
					/>
					<CardActions>
						<CustomButton type="submit" className={classes.button}>
							Create
						</CustomButton>
					</CardActions>
				</FormControl>
			</form>
		</>
	);
	return (
		<React.Fragment>
			{successMessage()}
			{errorMessage()}
			{deletedMessage()}
			<div onMouseMove={mouseMoveHandler}>
				{newCategoryForm()}
				<ListGroup>
					<ListGroupItem>{showCategories()}</ListGroupItem>
				</ListGroup>
			</div>
		</React.Fragment>
	);
};

export default Category;
