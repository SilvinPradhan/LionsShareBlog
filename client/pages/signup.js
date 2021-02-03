import React from "react";
import Layout from "../components/Layout";
import SignUpComponent from "../components/auth/SignUp.component";

const SignUp = () => {
  return (
    <Layout>
      <h1>Sign up</h1>
      <SignUpComponent />
    </Layout>
  );
};

export default SignUp;
