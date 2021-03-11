import React from 'react';
import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CategorySharpIcon from '@material-ui/icons/Category';
import { FaHashtag } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';

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
}));

const AdminIndex = () => {
	const classes = useStyles();
	return (
		<Layout>
			<Admin>
				<div className={classes.root}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Paper className={classes.paper} style={{ color: 'black', cursor: 'pointer' }}>
								{' '}
								<RiAdminFill /> &nbsp; Admin Dashboard
							</Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper} style={{ color: '#2f3bc2', cursor: 'pointer' }}>
								{' '}
								<CategorySharpIcon /> &nbsp; Category
							</Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper} style={{ color: '#2f3bc2', cursor: 'pointer' }}>
								<FaHashtag /> &nbsp; Tags
							</Paper>
						</Grid>
					</Grid>
				</div>
			</Admin>
		</Layout>
	);
};

export default AdminIndex;
