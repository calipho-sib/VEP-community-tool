import React from "react";

import * as Icon from "../assets/icons";

const Footer = () => {
  return (
    <div className="footer">
      The VEP Community Tool is being developed as open source. All the software
      packages are being actively maintained on{" "}
      <a
        href="https://github.com/calipho-sib/VEP-community-tool"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>{" "}
      and we encourage organizations and individuals to contribute requirements,
      documentation, issues, new templates, and code.
      <img
        className="github-corner"
        src={Icon.GithubCorner}
        alt="GitHub Icon"
      />
    </div>
  );
};

export default Footer;
