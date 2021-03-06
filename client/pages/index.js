import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import ProfileFind from '../pages/user/profileFind/ProfileFind';

const Index = () => {
	return (
		<Layout>
			Index page
			<Link href="/signup">Sign up</Link>
			<div className="App">
				<ProfileFind />
			</div>
		</Layout>
	);
};

export default Index;
