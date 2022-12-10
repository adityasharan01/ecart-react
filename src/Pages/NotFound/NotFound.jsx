import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div>
      <main className="center-div">
        <div className="page-not-found-card">
          <img
            src="/page_not_found.svg"
            alt="404page"
            className="img-responsive"
          />
          <h1 className="text-center">Hit the wrong route😔</h1>
          <Link to="/" className="btn-link btn-link-underline center-div">
            Go back to home page
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
