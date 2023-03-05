import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="center-div">
      <div className="footer-content p-4">
        <p className="pt-2" data-testid="extraInfo">
          Made with{" "}
          <span className="footer-icon">
            <i className="fas fa-heart"></i>
          </span>{" "}
          by Aditya Sharan
        </p>
        <div className="footer-link mt-2">
          <a
            className="m-1"
            href="https://github.com/adityasharan01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="m-1"
            href="https://twitter.com/adityasharan01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="m-1"
            href="https://www.instagram.com/adityasharan811/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="m-1"
            href="https://www.linkedin.com/in/aditya-sharan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
