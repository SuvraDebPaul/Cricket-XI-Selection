import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </header>
  );
};

export default Header;
