import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Private from '../../components/auth/Private';

const UserIndex = () => {
	return (
		<Layout>
			<Private>
				<h2>User Dashboard</h2>
				{/* Github Profile Finder Goes Here! */}
			</Private>
		</Layout>
	);
};

export default UserIndex;
