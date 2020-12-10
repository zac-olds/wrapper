import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="icon-container">
      <a href="https://www.linkedin.com/in/zachary-olds/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/zac-olds">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}

export default Footer;
