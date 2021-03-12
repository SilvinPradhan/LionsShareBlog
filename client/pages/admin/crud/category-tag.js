import React from 'react';
import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import Category from '../../../components/crud/Category';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: 'auto',
		maxHeight: 300,
		maxWidth: 500,
		background: 'white',
	},
	title: {
		fontSize: 16,
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'center',
	},
	button: {
		minWidth: 165,
		width: 'auto',
		height: '50px',
		letterSpacing: '0.5px',
		lineHeight: '50px',
		padding: '0 35px 0 35px',
		fontSize: '15px',
		backgroundColor: '#334aa6',
		color: 'white',
		textTransform: 'uppercase',
		fontWeight: 'bolder',
		borderRadius: '5px',
		border: 'none',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: '#525ed9',
		},
	},
}));

const CategoryTag = () => {
	const classes = useStyles();
	return (
		<Layout>
			<Admin>
				<Card className={classes.root}>
					<CardContent>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							Manage Categories and Tags
						</Typography>
					</CardContent>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-4">
								<Category />
							</div>
							<div className="col-md-4">
								<p> Tags</p>
							</div>
						</div>
					</div>
				</Card>
			</Admin>
		</Layout>
	);
};

export default CategoryTag;
