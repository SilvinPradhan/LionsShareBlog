import React from "react";
import Layout from "../components/Layout";
import SignUpComponent from "../components/auth/SignUp.component";

const SignUp = () => {
  return (
    <Layout>
      <h2 className="text-center pt-4 pb-4">Sign up</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SignUpComponent />
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
