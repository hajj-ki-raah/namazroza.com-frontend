import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">namazroza.com</div>
        <ul className="nav-links-container">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/articles"}>Articles</Link>
          </li>
          <li>
            <Link to={"/islamic-tools"}>Islamic Tools</Link>
          </li>
          <li>
            <Link to={"/community-forum"}>Community Forum</Link>
          </li>
          {/* <li>
            <Link to={"/donate"}>Donate</Link>
          </li> */}
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
