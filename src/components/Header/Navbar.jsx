import React from "react";
import Logo from "../../assets/images/logo.png";

const Navbar = ({ avaiableBalance }) => {
  return (
    <div className="navbar justify-between sora">
      <div className="navbar-start justify-between w-full px-4 lg:w-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedule</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <a className="btn btn-outline lg:hidden">
            💲<span>{avaiableBalance}</span>
          </a>
          <a className="">
            <img src={Logo} alt="" />
          </a>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedule</a>
          </li>
          <li>
            <a className="btn btn-outline btn-active bg-white ml-4">
              💲<span>{avaiableBalance}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
