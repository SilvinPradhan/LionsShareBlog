import React from 'react';
import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CategorySharpIcon from '@material-ui/icons/Category';
import { FaHashtag } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';

import { isAuthenticated } from '../../actions/auth';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		background: 'whiteSmoke',
	},
	paper: {
		padding: theme.spacing(1.5),
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.text.secondary,
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
}));

const AdminIndex = () => {
	const classes = useStyles();
	return (
		<Layout>
			<Admin>
				<div className={classes.root}>
					<Grid container spacing={3}>
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
							<Paper className={classes.paper} style={{ color: '#2f3bc2', cursor: 'pointer' }}>
								{' '}
								<CategorySharpIcon /> &nbsp; Category
							</Paper>
							<Paper style={{ marginTop: 5 }}>
								<List component="nav">
									<ListItem>
										<ListItemText primary="Trash" />
									</ListItem>
								</List>
								<Divider />
							</Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper} style={{ color: '#2f3bc2', cursor: 'pointer' }}>
								<FaHashtag /> &nbsp; Tags
							</Paper>
							<Paper style={{ marginTop: 5 }}>
								<List component="nav">
									<ListItem>
										<ListItemText primary="Trash" />
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
