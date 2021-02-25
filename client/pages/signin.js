import React from "react";
import Layout from "../components/Layout";
import SignInComponent from "../components/auth/SignIn.component";

const SignIn = () => {
  return (
    <Layout>
      <h2 className="text-center pt-4 pb-4">Sign in</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SignInComponent />
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
