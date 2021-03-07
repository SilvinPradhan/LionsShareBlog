import { useEffect } from 'react';
import Router from 'next/router';
import { isAuthenticated } from '../../actions/auth';

const Admin = ({ children }) => {
	useEffect(() => {
		if (!isAuthenticated()) {
			Router.push(`/signin`);
		} else if (isAuthenticated().role !== 1) {
			Router.push(`/`);
		}
	}, []);
	return <>{children}</>;
};

export default Admin;
