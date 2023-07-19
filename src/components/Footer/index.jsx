import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <p id="footer-p">
          Made by{" "}
          <a href="mailto:zeq5dh@virginia.edu">Lucas Kohler</a> | <Link to='/privacy'> Privacy Policy </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;