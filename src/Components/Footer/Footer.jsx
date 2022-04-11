import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__info">
        &copy; Khalid Hersi <span id="current-year"></span>
      </p>
    </footer>
  );
};

export default Footer;
