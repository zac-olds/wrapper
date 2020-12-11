import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <a href="https://www.linkedin.com/in/zachary-olds/">
        <FontAwesomeIcon icon={faLinkedin} id="linkedin" />
      </a>
      <a href="https://github.com/zac-olds">
        <FontAwesomeIcon icon={faGithub} id="github" />
      </a>
      <p>
        <FontAwesomeIcon icon={faCopyright} id="copyright" /> 2020 Zac Olds
      </p>
    </div>
  );
}

export default Footer;
