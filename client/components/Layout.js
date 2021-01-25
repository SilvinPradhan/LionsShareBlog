import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <p>Header</p>
      {/* render the contents in between */}
      {children}
      <p> Footer </p>
    </>
  );
};

export default Layout;
