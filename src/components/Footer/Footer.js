import React from "react";
import "./Footer.css";
// import "./images";

const Footer = () => {
  return (
    <div className="row">
      <div className="col-lg-12 col-m-12 col-s-12">
        <footer className="main-footer footer-copyright text-center py-3">
          <img
            href="https://github.com/nukepowermaiden2025"
            target="_blank"
            rel="noopener noreferrer"
            src="https://image.flaticon.com/icons/svg/38/38401.svg"
            alt="GitHub"
          />
          <img
            href="https://www.linkedin.com/in/kourtney-reynolds-97152a57/"
            target="_blank"
            rel="noopener noreferrer"
            src="https://image.flaticon.com/icons/svg/174/174857.svg"
            alt="LinkedIn"
          />
          <h5>&copy; 2018 Kourtney Reynolds </h5>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
