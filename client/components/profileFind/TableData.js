import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import React from 'react';

const CustomTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const TableData = ({ data, repo }) => {
	return (
		<div>
			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<CustomTableCell>Name</CustomTableCell>
							<CustomTableCell align="right">Avatar</CustomTableCell>
							<CustomTableCell align="right">Bio</CustomTableCell>
							<CustomTableCell align="right">Followers</CustomTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>{data.name}</TableCell>
							<TableCell
								style={{
									textAlign: 'center',
								}}
							>
								{!data.avatar_url ? (
									<FaceIcon />
								) : (
									<Tooltip title={data.name} arrow>
										<img
											style={{
												width: 40,
												height: 40,
												textAlign: 'center',
											}}
											alt="avatar"
											src={data.avatar_url}
										></img>
									</Tooltip>
								)}
							</TableCell>
							<TableCell>{data.bio}</TableCell>
							<TableCell>{data.followers}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
				<Table>
					<TableHead>
						<TableRow>
							<CustomTableCell>Repositories</CustomTableCell>
							<CustomTableCell>Watchers</CustomTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{repo.map((repos) => (
							<TableRow key={repos.name}>
								<TableCell style={{ display: 'flex', justifyContent: 'flex-start' }}>
									<GitHubIcon />
									&nbsp;
									<a
										href={repos.html_url}
										target="_blank"
										rel="noreferrer"
										style={{ textDecoration: 'none' }}
									>
										{repos.name}
									</a>
								</TableCell>
								<TableCell>{repos.watchers_count}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
		</div>
	);
};

export default TableData;
