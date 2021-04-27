import React from 'react';
import Layout from '../components/Layout';
import SignInComponent from '../components/auth/SignIn.component';

const SignIn = () => {
	return (
		<Layout>
			<>
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<SignInComponent />
					</div>
				</div>
			</>
		</Layout>
	);
};

export default SignIn;
