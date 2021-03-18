import { useState, useEffect } from 'react';
import { getCookie } from '../../actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import { create, getTags, removeTag } from '../../actions/tag';
import { CardActions, FormControl, Input, InputLabel, InputAdornment, Button, Tooltip } from '@material-ui/core';
import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { HiHashtag } from 'react-icons/hi';
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

const Tag = (props) => {
	const classes = useStyles();
	const [values, setValues] = useState({
		name: '',
		error: false,
		success: false,
		tags: [],
		removed: false,
		reload: false,
	});

	const { name, error, success, tags, removed, reload } = values;
	const token = getCookie('token');

	useEffect(() => {
		loadTags();
	}, [reload]);

	const loadTags = () => {
		getTags().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setValues({ ...values, tags: data });
				console.log(tags);
			}
		});
	};

	const showTags = () => {
		return tags.map((item, index) => {
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
		let answer = window.confirm(`Do you want to delete "${slug}" tag? `);
		if (answer) {
			deleteTag(slug);
		}
	};

	const deleteTag = (slug) => {
		removeTag(slug, token).then((data) => {
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
			return <p className="text-success">Tag successfully created!</p>;
		}
	};

	const errorMessage = () => {
		if (error) {
			return <p className="text-info">Tag already created!</p>;
		}
	};

	const deletedMessage = () => {
		if (removed) {
			return <p className="text-danger">Tag successfully deleted!</p>;
		}
	};

	const mouseMoveHandler = (e) => {
		setValues({ ...values, error: false, success: false, removed: '' });
	};

	const newTagForm = () => (
		<>
			<form onSubmit={clickSubmit}>
				<FormControl className={classes.margin}>
					<InputLabel htmlFor="input-with-category-icon">Tag Name:</InputLabel>
					<Input
						id="input-with-category-icon"
						type="text"
						onChange={handleChange}
						value={name}
						required
						startAdornment={
							<InputAdornment position="start">
								<HiHashtag />
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
				{newTagForm()}
				<ListGroup>
					<ListGroupItem>{showTags()}</ListGroupItem>
				</ListGroup>
			</div>
		</React.Fragment>
	);
};

export default Tag;
