import React from 'react';
import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import Category from '../../../components/crud/Category';
import { CardText, CardTitle, Col, Row } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '10px',
		margin: 'auto',
		maxWidth: 350,
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
				<Card className={classes.root}>
					<CardContent>
						<Typography className={classes.title}>Manage Categories and Tags</Typography>
					</CardContent>
				</Card>
				<Row className={classes.row}>
					<Col sm="5">
						<Card body>
							<CardContent>
								<Category />
							</CardContent>
						</Card>
					</Col>
					<Col sm="5">
						<Card body>
							<CardTitle tag="h5">Tag</CardTitle>
							<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
							<Button>Go somewhere</Button>
						</Card>
					</Col>
				</Row>
			</Admin>
		</Layout>
	);
};

export default CategoryTag;
