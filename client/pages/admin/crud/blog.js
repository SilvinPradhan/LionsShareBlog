import React from 'react';
import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CreateBlog from '../../../components/crud/CreateBlog';
import { Row } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '5px',
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
	icons: {
		position: 'relative',
		width: '35px',
		height: '35px',
		minWidth: '40px',
	},
	title: {
		fontWeight: 750,
		letterSpacing: '1.5px',
		fontSize: 22,
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

const Blog = (props) => {
	const classes = useStyles();
	return (
		<Layout>
			<Admin>
				<div className="container-fluid">
					<Row className={classes.root}>
						<Typography className={classes.title}>Create a New Blog</Typography>
						<div className="row">
							<div className="pt-2">
								<Typography>Share your ideas.</Typography>
							</div>
							<div className="pt-2">
								<img
									className={classes.icons}
									alt="Blog Icon"
									src="https://www.flaticon.com/svg/vstatic/svg/1809/1809216.svg?token=exp=1619586942~hmac=fc56a09fb2730fb132deb5ca12e33d5b"
								/>
							</div>
							<div className="pt-2">
								<Typography>Write your future here.</Typography>
							</div>
						</div>
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

export default Blog;
