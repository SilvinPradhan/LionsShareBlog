import React from 'react';
import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import CreateBlog from '../../../components/crud/CreateBlog';
import { Row } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '0',
		maxWidth: 350,
		margin: 'auto',
		background: 'white',
	},
	row: {
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
	title: {
		fontWeight: 'bolder',
		fontSize: 19,
		color: '#1b0975',
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

const CategoryTag = (props) => {
	const classes = useStyles();
	return (
		<Layout>
			<Admin>
				<div className="container-fluid">
					<Row className={classes.root}>
						<Card>
							<CardContent>
								<Typography className={classes.title}>Create a New Blog</Typography>
							</CardContent>
						</Card>
					</Row>
					<div className="row">
						<div className="col-md-12">
							<CreateBlog />
						</div>
					</div>
				</div>
			</Admin>
		</Layout>
	);
};

export default CategoryTag;
