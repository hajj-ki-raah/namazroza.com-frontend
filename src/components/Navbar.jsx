import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <header>
      <nav className="navbar">
        <div className="logo">namazroza.com</div>
        <button
          className="toggle-menu-button"
          onClick={() => setIsMenu(!isMenu)}
        >
          Menu
        </button>
        <ul className={"nav-links-container" + (isMenu ? " open" : "")}>
          <li>
            <Link to={"/"} onClick={() => setIsMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/articles"} onClick={() => setIsMenu(false)}>
              Articles
            </Link>
          </li>
          <li>
            <Link to={"/islamic-tools"} onClick={() => setIsMenu(false)}>
              Islamic Tools
            </Link>
          </li>
          <li>
            <Link to={"/community-forum"} onClick={() => setIsMenu(false)}>
              Community Forum
            </Link>
          </li>
          {/* <li>
            <Link to={"/donate"}>Donate</Link>
          </li> */}
          <li>
            <Link to={"/profile"} onClick={() => setIsMenu(false)}>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
