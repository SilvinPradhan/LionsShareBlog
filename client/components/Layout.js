import React from "react";
import Header from "../components/menu/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* render the contents in between */}
      {children}
      <p> Footer </p>
    </>
  );
};

export default Layout;
