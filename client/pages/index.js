import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      Index page
      <Link href="/signup">Sign up</Link>
    </Layout>
  );
};

export default Index;
