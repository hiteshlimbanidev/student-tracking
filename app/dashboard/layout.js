import React from "react";
import Sidenav from "./_components/Sidenav";
import Header from "./_components/Header";

const layout = ({ children }) => {
  return (
    <div>
      <div className="md:w-64 fixed hidden md:block">
        <Sidenav />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;
