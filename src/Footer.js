import React from "react";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col s12" style={{ textAlign: "center" }}>
            <h5 className="white-text">EduBot</h5>
            <p className="grey-text text-lighten-4">
              Your Personal Learning Assistant
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2022 Copyright DPB Manakal
          <a className=" Icons grey-text text-lighten-4 right" href="#!">
            <GithubFilled style={{ fontSize: "2em" }} />
          </a>
          <a className="Icons grey-text text-lighten-4 right" href="#!">
            <FacebookFilled style={{ fontSize: "2em" }} />
          </a>
          <a className="Icons grey-text text-lighten-4 right" href="#!">
            <LinkedinFilled style={{ fontSize: "2em" }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
