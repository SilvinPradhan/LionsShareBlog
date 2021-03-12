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

	const newCategoryForm = () => (
		<>
			<FormControl className={classes.margin}>
				<InputLabel htmlFor="input-with-category-icon">Category Name:</InputLabel>
				<Input
					id="input-with-category-icon"
					startAdornment={
						<InputAdornment position="start">
							<ClassIcon />
						</InputAdornment>
					}
				/>
				<CardActions>
					<CustomButton className={classes.button}>Create</CustomButton>
				</CardActions>
			</FormControl>
		</>
	);
	return <React.Fragment>{newCategoryForm()}</React.Fragment>;
};

export default Category;
