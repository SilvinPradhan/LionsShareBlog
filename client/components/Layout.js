import React from "react";
import Header from "../components/menu/Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {/* render the contents in between */}
      {children}
      <p> Footer </p>
    </React.Fragment>
  );
};

export default Layout;
