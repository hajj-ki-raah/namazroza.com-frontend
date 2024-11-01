import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links-container">
        <ul className="site-links-container">
          <li>Support & Site Policies</li>
          <li>
            <Link to={"/donate"}>Donate</Link>
          </li>
          <li>
            <Link to={"/team"}>Team Page</Link>
          </li>
          <li>
            <Link to={"/privacy-policy"}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={"/terms-and-conditions"}>Terms & Conditions</Link>
          </li>
        </ul>

        <ul className="social-links-container">
          <li>Join Our Community</li>
          <li>
            <a target="_blank" href={"#"}>
              Instagram
            </a>
          </li>
          <li>
            <a target="_blank" href={"#"}>
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href={"#"}>
              Twitter
            </a>
          </li>
          <li>
            <a target="_blank" href={"#"}>
              hajkiraah@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright-container">
        <span>Website Designed + Developed by Team HajjKiRaah.</span>
        <span>© 2024 NamazRoza.com. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
