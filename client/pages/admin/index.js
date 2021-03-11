import React from 'react';
import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
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
							<Paper className={classes.paper}>Admin Dashboard</Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper}>Category</Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper}>#Tags</Paper>
						</Grid>
					</Grid>
				</div>
			</Admin>
		</Layout>
	);
};

export default AdminIndex;
