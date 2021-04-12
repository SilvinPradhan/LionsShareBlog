import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TableData from './TableData';

const ProfileFind = () => {
	const [data, setData] = useState({});
	const [username, setUsername] = useState('');
	const [repo, setRepo] = useState([]);
	const ChangeHandler = (e) => {
		setUsername(e.target.value);
	};

	const SubmitHandler = async (e) => {
		e.preventDefault();

		const profile = await fetch(`https://api.github.com/users/${username}`);
		const profileJSON = await profile.json();
		console.log(profileJSON);
		const repo = await fetch(profileJSON.repos_url);
		const repoJSON = await repo.json();
		// console.log(repoJSON);
		if (profileJSON) {
			setData(profileJSON);
			setRepo(repoJSON);
		}
	};

	return (
		<div style={{ padding: 25 }}>
			<div
				className="searchBar"
				style={{
					marginBottom: 10,
					justifyContent: 'space-around',
					alignItems: 'stretch',
				}}
			>
				<Input
					style={{ width: 400 }}
					type="text"
					value={username}
					onChange={ChangeHandler}
					placeholder="Search GitHub Users: 'SilvinPradhan'"
					color="primary"
				/>
				<Button
					variant="contained"
					aria-label="Search"
					onClick={SubmitHandler}
					type="submit"
					style={{ color: 'black', fontSize: 15 }}
				>
					<GitHubIcon style={{ color: 'black' }} /> &nbsp; Search
				</Button>
				{!data.name ? (
					''
				) : (
					<Button variant="contained" style={{ backgroundColor: 'whitesmoke', color: 'white' }}>
						<a href={data.html_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
							View on GitHub
						</a>
					</Button>
				)}
			</div>
			<div className="dataTable">
				<TableData data={data} repo={repo} />
			</div>
		</div>
	);
};

export default ProfileFind;
