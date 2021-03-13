import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { isAuthenticated, getCookie } from '../../actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import { create } from '../../actions/category';
import { CardActions, FormControl, Input, InputLabel, InputAdornment } from '@material-ui/core';
import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import ClassIcon from '@material-ui/icons/Class';
import { ToastContainer, toast } from 'react-toastify';

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
}));

const Category = (props) => {
	const classes = useStyles();
	const [values, setValues] = useState({
		name: '',
		error: false,
		success: false,
		categories: [],
		removed: false,
	});

	const { name, error, success, categories, removed } = values;
	const token = getCookie('token');

	const clickSubmit = (e) => {
		e.preventDefault();
		create({ name }, token).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error, success: false });
			} else {
				setValues({ ...values, error: false, success: true, name: '' });
				toast.success(`A Category named '${name}' has been created.`);
			}
		});
	};

	const handleChange = (e) => {
		setValues({ ...values, name: e.target.value, error: false, success: false, removed: '' });
	};

	const newCategoryForm = () => (
		<>
			<form onSubmit={clickSubmit}>
				<ToastContainer
					position="top-right"
					autoClose={8000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
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
	return <React.Fragment>{newCategoryForm()}</React.Fragment>;
};

export default Category;
