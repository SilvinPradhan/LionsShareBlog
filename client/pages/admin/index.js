import React from 'react';
import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CategorySharpIcon from '@material-ui/icons/Category';
import { FaHashtag } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';
import { ImBlog } from 'react-icons/im';
import { isAuthenticated } from '../../actions/auth';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		background: 'whiteSmoke',
	},
	paper: {
		marginLeft: '40px',
		marginRight: '40px',
		padding: theme.spacing(1.5),
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.text.secondary,
		fontWeight: 600,
		letterSpacing: 0.7,
	},
	adminPaper: {
		padding: theme.spacing(2),
		margin: 'auto',
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.text.secondary,
	},
	createPaper: {
		textAlign: 'center',
		cursor: 'pointer',
		display: 'flex',
		'&:hover': {
			background: '#ebebeb',
		},
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.text.primary,
	},
}));

const AdminIndex = () => {
	const classes = useStyles();
	return (
		<Layout>
			<Admin>
				<div className={classes.root}>
					<Grid container spacing={4} justify="center">
						<Grid item xs={12}>
							{isAuthenticated() ? (
								<Paper
									className={classes.adminPaper}
									style={{ color: 'black', cursor: 'pointer', padding: 20 }}
								>
									{' '}
									<RiAdminFill />
									&nbsp; Welcome to your dashboard, <b>{`${isAuthenticated().name}`}</b>
								</Paper>
							) : (
								''
							)}
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper} style={{ color: '#2f3bc2', cursor: 'not-allowed' }}>
								{' '}
								<CategorySharpIcon /> &nbsp; Category
							</Paper>
							<Paper style={{ marginTop: 5 }} className={classes.createPaper}>
								<List component="nav">
									<ListItem>
										<Link href="/admin/crud/category-tag">
											<ListItemText primary="Create Categories" />
										</Link>
									</ListItem>
								</List>
								<Divider />
							</Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper} style={{ color: '#2f3bc2', cursor: 'not-allowed' }}>
								<FaHashtag /> &nbsp; Tags
							</Paper>
							<Paper style={{ marginTop: 5 }} className={classes.createPaper}>
								<List component="nav">
									<ListItem>
										<Link href="/admin/crud/category-tag">
											<ListItemText primary="Create Tags" />
										</Link>
									</ListItem>
								</List>
								<Divider />
							</Paper>
						</Grid>
						<Grid item md={12} sm={6}>
							<Paper className={classes.paper} style={{ color: '#2f3bc2', cursor: 'not-allowed' }}>
								<ImBlog /> &nbsp; Blog
							</Paper>
							<Paper style={{ marginTop: 5 }} className={classes.createPaper}>
								<List component="nav">
									<ListItem>
										<Link href="/admin/crud/blog">
											<ListItemText primary="Create Blogs" />
										</Link>
									</ListItem>
								</List>
								<Divider />
							</Paper>
						</Grid>
					</Grid>
				</div>
			</Admin>
		</Layout>
	);
};

export default AdminIndex;
